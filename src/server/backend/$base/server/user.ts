import type { JSONContent } from '@tiptap/core'
import type { ExtractLocationSettings, ExtractSettingType } from '../@define-setting'

import { IdTransformable } from './@extends'
import type { BeatmapSource, RankingStatus } from '~/def/beatmap'
import type {
  ActiveMode,
  ActiveRuleset,
  LeaderboardRankingSystem,
} from '~/def/common'
import type { RankingSystemScore } from '~/def/score'
import type {
  DynamicSettingStore,
  Scope,
  UserCompact,
  UserExtra,
  UserOptional,
  UserSecrets,
  UserStatistic,
  UserStatus,
} from '~/def/user'
import type { CountryCode } from '~/def/country-code'
import type { settings } from '$active/dynamic-settings'
import type { Mode, Ruleset } from '~/def'

export namespace UserProvider {
  export type ComposableProperties<Id> = UserExtra<Id> & UserOptional
  export interface OptType {
    handle: string
    keys?: Array<'id' | 'name' | 'safeName' | 'email'>
  }

  export interface BaseQuery<Id, Mode extends ActiveMode, Ruleset extends ActiveRuleset, RankingSystem extends LeaderboardRankingSystem> {
    id: Id
    mode: Mode
    ruleset: Ruleset
    rankingSystem: RankingSystem
    page: number
    perPage: number
    rankingStatus: RankingStatus[]
  }
}
export abstract class UserProvider<Id> extends IdTransformable {
  abstract exists({ handle, keys }: UserProvider.OptType): PromiseLike<boolean>

  abstract getCompact<_Scope extends Scope>(
    opt: UserProvider.OptType & { scope: _Scope }
  ): Promise<UserCompact<Id>
  & (_Scope extends Scope.Self ? UserSecrets : Record<never, never>)
  >

  abstract getCompactById<_Scope extends Scope>(opt: {
    id: Id
    scope: _Scope
  }): Promise<
  UserCompact<Id>
  & (_Scope extends Scope.Self ? UserSecrets : Record<never, never>)
  >

  abstract getStatistics(query: {
    id: Id
    flag: CountryCode
  }): PromiseLike<UserStatistic>

  abstract getFull<
    Excludes extends Partial<
      Record<keyof UserProvider.ComposableProperties<Id>, boolean>
    >,
   _Scope extends Scope = Scope.Public,
  >(query: {
    handle: string
    excludes?: Excludes
    includeHidden?: boolean
    scope: _Scope
  }): Promise<
  UserCompact<Id> & {
    [K in keyof UserProvider.ComposableProperties<Id> as Excludes[K] extends true
      ? never
      : K
    ]: UserProvider.ComposableProperties<Id>[K];
  }
  >
  getFullWithSettings<
    Excludes extends Partial<
      Record<keyof UserProvider.ComposableProperties<Id>, boolean>
    >,
   _Scope extends Scope = Scope.Public,
  >(query: {
    handle: string
    excludes?: Excludes
    includeHidden?: boolean
    scope: _Scope
  }) {
    return this.getFull(query)
  }

  abstract changeSettings(
    user: { id: Id },
    input: {
      email?: string
      name?: string
      flag?: CountryCode
      preferredMode: {
        mode: Mode
        ruleset: Ruleset
      }
    }
  ): PromiseLike<UserCompact<Id>>

  abstract changeUserpage(
    user: { id: Id },
    input: {
      profile: JSONContent
    }
  ): PromiseLike<{
    html: string
    raw: JSONContent
  }>

  abstract changeVisibility(
    user: { id: Id },
    input: {
      email?: string
      name?: string
      userpageContent?: string
    }
  ): PromiseLike<UserCompact<Id>>

  abstract changePassword(
    user: { id: Id },
    newPasswordMD5: string
  ): PromiseLike<UserCompact<Id>>

  abstract changeAvatar(user: { id: Id }, avatar: Uint8Array): PromiseLike<string>

  abstract search(opt: {
    keyword: string
    limit: number
  }): PromiseLike<UserCompact<Id>[]>

  abstract count(opt: {
    keyword?: string
  }): PromiseLike<number>

  abstract status({ id }: { id: Id }): PromiseLike<{
    status: UserStatus.Offline
    lastSeen: Date
  } | {
    status: Exclude<UserStatus, UserStatus.Offline>
    description: string
    mode: ActiveMode
    ruleset: ActiveRuleset
    beatmap?: {
      id: number
      foreignId: number
      md5: string
      version: string
      creator: string
      beatmapset?: {
        id: number
        foreignId: number
        meta: {
          intl: {
            artist: string
            title: string
          }
        }
        source: BeatmapSource
      }
    }
  } | null>

  abstract register(opt: { name: string; safeName: string; email: string; passwordMd5: string }): PromiseLike<UserCompact<Id>>

  abstract getDynamicSettings(user: { id: Id }): Promise<ExtractSettingType<ExtractLocationSettings<DynamicSettingStore.Server, typeof settings>>>

  abstract setDynamicSettings(user: { id: Id }, args: ExtractSettingType<ExtractLocationSettings<DynamicSettingStore.Server, typeof settings>>): Promise<ExtractSettingType<ExtractLocationSettings<DynamicSettingStore.Server, typeof settings>>>

  abstract getBests<
    Mode extends ActiveMode,
    Ruleset extends ActiveRuleset,
    RankingSystem extends LeaderboardRankingSystem,
  >(query: UserProvider.BaseQuery<Id, Mode, Ruleset, RankingSystem>): PromiseLike<RankingSystemScore<string, Id, Mode, RankingSystem>[]>

  abstract getTops<
    Mode extends ActiveMode,
    Ruleset extends ActiveRuleset,
    RankingSystem extends LeaderboardRankingSystem,
  >(query: UserProvider.BaseQuery<Id, Mode, Ruleset, RankingSystem>): PromiseLike<{
    count: number
    scores: RankingSystemScore<string, Id, Mode, RankingSystem>[]
  }>
}
