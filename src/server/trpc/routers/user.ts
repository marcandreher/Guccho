import { TRPCError } from '@trpc/server'
import { array, number, object, string } from 'zod'

import { hasLeaderboardRankingSystem, hasRuleset } from '../config'

import {
  zodHandle,
  zodLeaderboardRankingSystem,
  zodMode,
  zodRankingStatus,
  zodRelationType,
  zodRuleset,
} from '../shapes'
import { router as _router, publicProcedure as p } from '../trpc'
import { sessionProcedure } from '../middleware/session'
import { optionalUserProcedure } from '../middleware/optional-user'
import { userNotFound } from '../messages'
import { Scope, UserPrivilege } from '~/def/user'
import { RankingStatus } from '~/def/beatmap'

import { MapProvider, SessionProvider, UserProvider, UserRelationProvider } from '$active/server'

const userProvider = new UserProvider()
const userRelationshipProvider = new UserRelationProvider()
const session = new SessionProvider()

export const router = _router({
  exists: p
    .input(
      object({
        handle: zodHandle,
      })
    )
    .query(async ({ input: { handle } }) => {
      return userProvider.exists({ handle })
    }),
  userpage: optionalUserProcedure
    .input(
      object({
        handle: zodHandle,
      })
    )
    .query(async ({ input: { handle }, ctx }) => {
      const user = await userProvider.getFull({
        handle,
        excludes: { relationships: true, secrets: true, email: true },
        includeHidden: true,
        scope: Scope.Public,
      })

      const isSelf = user.id === ctx.user?.id
      if (!user.roles.includes(UserPrivilege.Normal) && !isSelf) {
        throw new TRPCError({ code: 'NOT_FOUND', message: userNotFound })
      }
      return mapId(user, UserProvider.idToString)
    }),
  best: p
    .input(
      object({
        handle: zodHandle,
        mode: zodMode,
        ruleset: zodRuleset,
        rankingSystem: zodLeaderboardRankingSystem,
        page: number().gte(0).lt(10),
        includes: array(zodRankingStatus).default([RankingStatus.Ranked, RankingStatus.Loved, RankingStatus.Approved]),
      })
    )
    .query(async ({ input }) => {
      const user = await userProvider.getCompact({ handle: input.handle })

      const { mode, ruleset, rankingSystem } = input
      if (
        !hasRuleset(mode, ruleset)
        || !hasLeaderboardRankingSystem(mode, ruleset, rankingSystem)
      ) {
        throw new TRPCError({
          code: 'PRECONDITION_FAILED',
          message: 'ranking system not supported',
        })
      }

      const returnValue = await userProvider.getBests({
        id: user.id,
        mode,
        ruleset,
        rankingSystem,
        page: input.page,
        perPage: 10,
        rankingStatus: input.includes,
      })
      if (!returnValue) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
      }
      // return mapId(returnValue, ScoreProvider.scoreIdToString)
      return returnValue.map(v => ({
        ...v,
        beatmap: beatmapIsVisible(v.beatmap)
          ? {
              ...mapId(v.beatmap, MapProvider.idToString),
              beatmapset: mapId(v.beatmap.beatmapset, MapProvider.idToString),
            }
          : v.beatmap,
      }))
    }),
  tops: p
    .input(
      object({
        handle: zodHandle,
        mode: zodMode,
        ruleset: zodRuleset,
        rankingSystem: zodLeaderboardRankingSystem,
        page: number().gte(0).lt(10),
        includes: array(zodRankingStatus).default([RankingStatus.Ranked, RankingStatus.Loved, RankingStatus.Approved]),
      })
    )
    .query(async ({ input }) => {
      const user = await userProvider.getCompact({ handle: input.handle })

      const { mode, ruleset, rankingSystem } = input
      if (
        !hasRuleset(mode, ruleset)
        || !hasLeaderboardRankingSystem(mode, ruleset, rankingSystem)
      ) {
        throw new TRPCError({
          code: 'PRECONDITION_FAILED',
          message: 'ranking system not supported',
        })
      }

      const returnValue = await userProvider.getTops({
        id: user.id,
        mode: input.mode,
        ruleset: input.ruleset,
        rankingSystem: input.rankingSystem,
        page: input.page,
        perPage: 10,
        rankingStatus: input.includes,
      })
      if (!returnValue) {
        throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' })
      }
      return {
        ...returnValue,
        scores: returnValue.scores.map(v => ({
          ...v,
          beatmap: beatmapIsVisible(v.beatmap)
            ? {
                ...mapId(v.beatmap, MapProvider.idToString),
                beatmapset: mapId(v.beatmap.beatmapset, MapProvider.idToString),
              }
            : v.beatmap,
        })),
      }
    }),
  essential: p
    .input(
      object({
        handle: zodHandle,
      })
    )
    .query(async ({ input }) => {
      const user = await userProvider.getCompact({ handle: input.handle })

      return mapId(user, UserProvider.idToString)
    }),
  countRelations: p
    .input(
      object({
        handle: zodHandle,
        type: zodRelationType,
      })
    )
    .query(async ({ input: { handle, type } }) => {
      const user = await userProvider.getCompact({ handle })

      const count = await userRelationshipProvider.count({ user, type })
      return count
    }),
  status: p
    .input(object({
      id: string().trim(),
    })).query(async ({ input: { id } }) => {
      return await userProvider.status({ id: UserProvider.stringToId(id) })
    }),
  register: sessionProcedure
    .input(object({
      name: string().trim(),
      safeName: string().trim().optional(),
      email: string().trim().email(),
      passwordMd5: string().trim(),
    })).mutation(async ({ input, ctx }) => {
      const user = await userProvider.register(input)
      const sessionId = ctx.session.id
      await session.update(sessionId, { userId: UserProvider.idToString(user.id) })
      return user
    }),
})
