import { features as bF } from '../bancho.py'
import type { Feature } from '~/def/features'

export {
  hasLeaderboardRankingSystem,
  hasRankingSystem,
  hasRuleset,
  modes,
  rulesets,
  rankingSystems,
  leaderboardRankingSystems,
  userRoles,
} from '../bancho.py'
export type { Id, ScoreId } from '../bancho.py'

export const features = new Set<Feature>([...bF])
