import type { GlobalI18n } from '../@types'
import { Rank } from '~/def'
import { RankingStatus } from '~/def/beatmap'
import { CountryCode } from '~/def/country-code'
import { Mail } from '~/def/mail'
import { Scope, UserRole } from '~/def/user'
import { GucchoError } from '~/def/messages'

export default {
  // reuse en-GB
  server: {} as any,
  footer: {
    about: '关于',
    resources: '资源',
  },
  mode: {} as any,
  ruleset: {} as any,

  rank: {
    [Rank.PPv2]: 'Performance(v2)',
    [Rank.PPv1]: 'Performance(v1)',
    [Rank.RankedScore]: '计入排行榜的总分',
    [Rank.TotalScore]: '总分',
    [Rank.Score]: '分数',
  },

  title: {
    'leaderboard': '排行榜',
    'status': '状态',
    'settings': '设置',
    'relations': '好友 & 黑名单',
    'userpage': '用户页面',
    'admin-panel': '管理面板',
    'logs': '系统日志',
    'articles': '文章',
    'clans': '家人们',
    'account-recovery': '找回账号',
    'user-management': '用户管理',
  },

  global: {
    'logout': '登出',
    'login': '登录',
    'register': '注册',
    'pp': 'pp',
    'player': '玩家',
    'rank': '排名',
    'mods': 'mods',
    'played-at': '游玩时间',
    'acc': '准确度',
    'beatmapsets': '图组',
    'beatmaps': '图',
    'users': '用户',
    'session': '会话',
    'accuracy': '准确度',
    'play-count': '游玩次数',
    'wip': '开发中',
    'password': '密码',
    'email': '邮箱',
    'otp': '验证码',
    'verify': '验证',
    'max-combo': '最大连击',
  },

  role: {
    [UserRole.Disabled]: '被禁用',
    [UserRole.Restricted]: '已被封禁',
    // [UserRole.Registered]: '已注册',
    [UserRole.Inactive]: '不活跃的',
    [UserRole.Supported]: '赞助过',
    [UserRole.Supporter]: '赞助者',
    [UserRole.Verified]: '已认证',
    [UserRole.Alumni]: 'Alumni',
    [UserRole.TournamentStaff]: '赛事人员',
    [UserRole.ChannelModerator]: '频道管理员',
    [UserRole.Moderator]: '聊天管理员',
    [UserRole.BeatmapNominator]: 'BN',
    [UserRole.Staff]: 'Staff',
    [UserRole.Admin]: '管理员',
    [UserRole.Owner]: '服主',
    [UserRole.Bot]: '机器人',
  },

  scope: {
    [Scope.Self]: '自己',
    [Scope.Friends]: '仅好友',
    [Scope.Public]: '公开',
  },

  service: {
    logs: '日志系统',
    ranks: '排名系统',
    sessions: '网站登录',
  },

  beatmap: {
    status: {
      [RankingStatus.Graveyard]: '坟图',
      [RankingStatus.WIP]: '未完成',
      [RankingStatus.Pending]: 'Pending',
      [RankingStatus.Ranked]: 'Ranked',
      [RankingStatus.Approved]: 'Approved',
      [RankingStatus.Qualified]: 'Qualified',
      [RankingStatus.Loved]: 'Loved',
      [RankingStatus.Deleted]: '已被删除',
      [RankingStatus.NotFound]: '找不到',
      [RankingStatus.Unknown]: '未知',
    },
  },

  error: {
    [GucchoError.UnknownError]: '未知错误。',
    [GucchoError.MissingServerAvatarConfig]: '头像配置缺失。',
    [GucchoError.ModeNotSupported]: '不支持的模式。',
    [GucchoError.UserNotFound]: '找不到用户。',
    [GucchoError.UserExists]: '已有此用户。',
    [GucchoError.ConflictEmail]: '邮箱已被使用。',
    [GucchoError.UpdateUserSettingsFailed]: '更新用户设置失败。',
    [GucchoError.UpdateUserpageFailed]: '更新Profile失败。',
    [GucchoError.MimeNotImage]: '文件不是图片。',
    [GucchoError.HackerTryingToDeleteAllAvatars]: '你是黑客？为什么要删所有人的头像！',
    [GucchoError.DeletingMoreThanOneAvatars]: '尝试删除不止一张头像！请联系管理员协助您。',
    [GucchoError.IncorrectPassword]: '密码不正确。',
    [GucchoError.PasswordNotMatch]: '密码不一致。',
    [GucchoError.OldPasswordMismatch]: '旧密码不一致。',
    [GucchoError.EmailTokenNotFound]: '验证邮箱失败！。',
    [GucchoError.RelationNotFound]: '找不到关系。',
    [GucchoError.ConflictRelation]: '您已经与此用户有其他关系了。',
    [GucchoError.AtLeastOneUserNotExists]: '至少有一个用户不存在。',
    [GucchoError.UnableToRetrieveSession]: '无法加载会话。',
    [GucchoError.UnableToRefreshSession]: '无法更新回话。',
    [GucchoError.YouNeedToLogin]: '你还未登录。',
    [GucchoError.SessionNotFound]: '找不到会话。',
    [GucchoError.RequireAdminPrivilege]: '需要管理员权限。',
    [GucchoError.InvalidId]: 'ID不合法。',
    [GucchoError.BeatmapNotFound]: '找不到图。',
    [GucchoError.EmptyPassword]: '密码不能为空。',
    [GucchoError.ProhibitedRelationWithSelf]: '不能与自己建立关系。',
    [GucchoError.RegistrationFailed]: '注册失败。',
    [GucchoError.ScoreNotFound]: '找不到成绩。',
    [GucchoError.UnableToUpdateSession]: '无法更新会话。',
    [GucchoError.ClanNotFound]: '找不到家人。',
  },

  country: {
    [CountryCode.Unknown]: '未知',
    [CountryCode.Afghanistan]: '阿富汗',
    [CountryCode.AlandIslands]: '奥兰群岛',
    [CountryCode.Albania]: '阿尔巴尼亚',
    [CountryCode.Algeria]: '阿尔及利亚',
    [CountryCode.AmericanSamoa]: '美属萨摩亚',
    [CountryCode.Andorra]: '安道尔',
    [CountryCode.Angola]: '安哥拉',
    [CountryCode.Anguilla]: '安圭拉',
    [CountryCode.Antarctica]: '南极洲',
    [CountryCode.AntiguaAndBarbuda]: '安提瓜和巴布达',
    [CountryCode.Argentina]: '阿根廷',
    [CountryCode.Armenia]: '亚美尼亚',
    [CountryCode.Aruba]: '阿鲁巴',
    [CountryCode.Australia]: '澳大利亚',
    [CountryCode.Austria]: '奥地利',
    [CountryCode.Azerbaijan]: '阿塞拜疆',
    [CountryCode.Bahamas]: '巴哈马',
    [CountryCode.Bahrain]: '巴林',
    [CountryCode.Bangladesh]: '孟加拉国',
    [CountryCode.Barbados]: '巴巴多斯',
    [CountryCode.Belarus]: '白俄罗斯',
    [CountryCode.Belgium]: '比利时',
    [CountryCode.Belize]: '伯利兹',
    [CountryCode.Benin]: '贝宁',
    [CountryCode.Bermuda]: '百慕大',
    [CountryCode.Bhutan]: '不丹',
    [CountryCode.Bolivia]: '玻利维亚',
    [CountryCode.BonaireSintEustatiusSaba]: '博内尔、圣尤斯特歇斯和萨巴',
    [CountryCode.BosniaAndHerzegovina]: '波斯尼亚和黑塞哥维那',
    [CountryCode.Botswana]: '博茨瓦纳',
    [CountryCode.BouvetIsland]: '布韦岛',
    [CountryCode.Brazil]: '巴西',
    [CountryCode.BritishIndianOceanTerritory]: '英属印度洋领地',
    [CountryCode.BruneiDarussalam]: '文莱达鲁萨兰国',
    [CountryCode.Bulgaria]: '保加利亚',
    [CountryCode.BurkinaFaso]: '布基纳法索',
    [CountryCode.Burundi]: '布隆迪',
    [CountryCode.Cambodia]: '柬埔寨',
    [CountryCode.Cameroon]: '喀麦隆',
    [CountryCode.Canada]: '加拿大',
    [CountryCode.CapeVerde]: '佛得角',
    [CountryCode.CaymanIslands]: '开曼群岛',
    [CountryCode.CentralAfricanRepublic]: '中非共和国',
    [CountryCode.Chad]: '乍得',
    [CountryCode.Chile]: '智利',
    [CountryCode.China]: '中国',
    [CountryCode.ChristmasIsland]: '圣诞岛',
    [CountryCode.CocosKeelingIslands]: '科科斯（基林）群岛',
    [CountryCode.Colombia]: '哥伦比亚',
    [CountryCode.Comoros]: '科摩罗',
    [CountryCode.Congo]: '刚果',
    [CountryCode.CongoDemocraticRepublic]: '刚果民主共和国',
    [CountryCode.CookIslands]: '库克群岛',
    [CountryCode.CostaRica]: '哥斯达黎加',
    [CountryCode.CoteDIvoire]: '科特迪瓦',
    [CountryCode.Croatia]: '克罗地亚',
    [CountryCode.Cuba]: '古巴',
    [CountryCode.Curacao]: '库拉索',
    [CountryCode.Cyprus]: '塞浦路斯',
    [CountryCode.CzechRepublic]: '捷克共和国',
    [CountryCode.Denmark]: '丹麦',
    [CountryCode.Djibouti]: '吉布提',
    [CountryCode.Dominica]: '多米尼克',
    [CountryCode.DominicanRepublic]: '多米尼加共和国',
    [CountryCode.Ecuador]: '厄瓜多尔',
    [CountryCode.Egypt]: '埃及',
    [CountryCode.ElSalvador]: '萨尔瓦多',
    [CountryCode.EquatorialGuinea]: '赤道几内亚',
    [CountryCode.Eritrea]: '厄立特里亚',
    [CountryCode.Estonia]: '爱沙尼亚',
    [CountryCode.Ethiopia]: '埃塞俄比亚',
    [CountryCode.FalklandIslands]: '福克兰群岛',
    [CountryCode.FaroeIslands]: '法罗群岛',
    [CountryCode.Fiji]: '斐济',
    [CountryCode.Finland]: '芬兰',
    [CountryCode.France]: '法国',
    [CountryCode.FrenchGuiana]: '法属圭亚那',
    [CountryCode.FrenchPolynesia]: '法属波利尼西亚',
    [CountryCode.FrenchSouthernTerritories]: '法属南部领地',
    [CountryCode.Gabon]: '加蓬',
    [CountryCode.Gambia]: '冈比亚',
    [CountryCode.Georgia]: '格鲁吉亚',
    [CountryCode.Germany]: '德国',
    [CountryCode.Ghana]: '加纳',
    [CountryCode.Gibraltar]: '直布罗陀',
    [CountryCode.Greece]: '希腊',
    [CountryCode.Greenland]: '格陵兰',
    [CountryCode.Grenada]: '格林纳达',
    [CountryCode.Guadeloupe]: '瓜德罗普',
    [CountryCode.Guam]: '关岛',
    [CountryCode.Guatemala]: '危地马拉',
    [CountryCode.Guernsey]: '根西',
    [CountryCode.Guinea]: '几内亚',
    [CountryCode.GuineaBissau]: '几内亚比绍',
    [CountryCode.Guyana]: '圭亚那',
    [CountryCode.Haiti]: '海地',
    [CountryCode.HeardIslandMcdonaldIslands]: '赫德岛和麦克唐纳群岛',
    [CountryCode.HolySeeVaticanCityState]: '梵蒂冈城国',
    [CountryCode.Honduras]: '洪都拉斯',
    [CountryCode.HongKong]: '香港',
    [CountryCode.Hungary]: '匈牙利',
    [CountryCode.Iceland]: '冰岛',
    [CountryCode.India]: '印度',
    [CountryCode.Indonesia]: '印度尼西亚',
    [CountryCode.Iran]: '伊朗',
    [CountryCode.Iraq]: '伊拉克',
    [CountryCode.Ireland]: '爱尔兰',
    [CountryCode.IsleOfMan]: '马恩岛',
    [CountryCode.Israel]: '以色列',
    [CountryCode.Italy]: '意大利',
    [CountryCode.Jamaica]: '牙买加',
    [CountryCode.Japan]: '日本',
    [CountryCode.Jersey]: '泽西',
    [CountryCode.Jordan]: '约旦',
    [CountryCode.Kazakhstan]: '哈萨克斯坦',
    [CountryCode.Kenya]: '肯尼亚',
    [CountryCode.Kiribati]: '基里巴斯',
    [CountryCode.Korea]: '韩国',
    [CountryCode.KoreaDemocraticPeoplesRepublic]: '朝鲜民主主义人民共和国',
    [CountryCode.Kuwait]: '科威特',
    [CountryCode.Kyrgyzstan]: '吉尔吉斯斯坦',
    [CountryCode.LaoPeoplesDemocraticRepublic]: '老挝人民民主共和国',
    [CountryCode.Latvia]: '拉脱维亚',
    [CountryCode.Lebanon]: '黎巴嫩',
    [CountryCode.Lesotho]: '莱索托',
    [CountryCode.Liberia]: '利比里亚',
    [CountryCode.LibyanArabJamahiriya]: '利比亚阿拉伯民众国',
    [CountryCode.Liechtenstein]: '列支敦士登',
    [CountryCode.Lithuania]: '立陶宛',
    [CountryCode.Luxembourg]: '卢森堡',
    [CountryCode.Macao]: '澳门',
    [CountryCode.Macedonia]: '北马其顿',
    [CountryCode.Madagascar]: '马达加斯加',
    [CountryCode.Malawi]: '马拉维',
    [CountryCode.Malaysia]: '马来西亚',
    [CountryCode.Maldives]: '马尔代夫',
    [CountryCode.Mali]: '马里',
    [CountryCode.Malta]: '马耳他',
    [CountryCode.MarshallIslands]: '马绍尔群岛',
    [CountryCode.Martinique]: '马提尼克',
    [CountryCode.Mauritania]: '毛里塔尼亚',
    [CountryCode.Mauritius]: '毛里求斯',
    [CountryCode.Mayotte]: '马约特',
    [CountryCode.Mexico]: '墨西哥',
    [CountryCode.Micronesia]: '密克罗尼西亚',
    [CountryCode.Moldova]: '摩尔多瓦',
    [CountryCode.Monaco]: '摩纳哥',
    [CountryCode.Mongolia]: '蒙古',
    [CountryCode.Montenegro]: '黑山',
    [CountryCode.Montserrat]: '蒙塞拉特',
    [CountryCode.Morocco]: '摩洛哥',
    [CountryCode.Mozambique]: '莫桑比克',
    [CountryCode.Myanmar]: '缅甸',
    [CountryCode.Namibia]: '纳米比亚',
    [CountryCode.Nauru]: '瑙鲁',
    [CountryCode.Nepal]: '尼泊尔',
    [CountryCode.Netherlands]: '荷兰',
    [CountryCode.NewCaledonia]: '新喀里多尼亚',
    [CountryCode.NewZealand]: '新西兰',
    [CountryCode.Nicaragua]: '尼加拉瓜',
    [CountryCode.Niger]: '尼日尔',
    [CountryCode.Nigeria]: '尼日利亚',
    [CountryCode.Niue]: '纽埃',
    [CountryCode.NorfolkIsland]: '诺福克岛',
    [CountryCode.NorthernMarianaIslands]: '北马里亚纳群岛',
    [CountryCode.Norway]: '挪威',
    [CountryCode.Oman]: '阿曼',
    [CountryCode.Pakistan]: '巴基斯坦',
    [CountryCode.Palau]: '帕劳',
    [CountryCode.PalestinianTerritory]: '巴勒斯坦领土',
    [CountryCode.Panama]: '巴拿马',
    [CountryCode.PapuaNewGuinea]: '巴布亚新几内亚',
    [CountryCode.Paraguay]: '巴拉圭',
    [CountryCode.Peru]: '秘鲁',
    [CountryCode.Philippines]: '菲律宾',
    [CountryCode.Pitcairn]: '皮特凯恩群岛',
    [CountryCode.Poland]: '波兰',
    [CountryCode.Portugal]: '葡萄牙',
    [CountryCode.PuertoRico]: '波多黎各',
    [CountryCode.Qatar]: '卡塔尔',
    [CountryCode.Reunion]: '留尼汪',
    [CountryCode.Romania]: '罗马尼亚',
    [CountryCode.RussianFederation]: '俄罗斯联邦',
    [CountryCode.Rwanda]: '卢旺达',
    [CountryCode.SaintBarthelemy]: '圣巴泰勒米',
    [CountryCode.SaintHelena]: '圣赫勒拿',
    [CountryCode.SaintKittsAndNevis]: '圣基茨和尼维斯',
    [CountryCode.SaintLucia]: '圣卢西亚',
    [CountryCode.SaintMartin]: '圣马丁',
    [CountryCode.SaintPierreAndMiquelon]: '圣皮埃尔和密克隆',
    [CountryCode.SaintVincentAndGrenadines]: '圣文森特和格林纳丁斯',
    [CountryCode.Samoa]: '萨摩亚',
    [CountryCode.SanMarino]: '圣马力诺',
    [CountryCode.SaoTomeAndPrincipe]: '圣多美和普林西比',
    [CountryCode.SaudiArabia]: '沙特阿拉伯',
    [CountryCode.Senegal]: '塞内加尔',
    [CountryCode.Serbia]: '塞尔维亚',
    [CountryCode.Seychelles]: '塞舌尔',
    [CountryCode.SierraLeone]: '塞拉利昂',
    [CountryCode.Singapore]: '新加坡',
    [CountryCode.SintMaarten]: '圣马丁',
    [CountryCode.Slovakia]: '斯洛伐克',
    [CountryCode.Slovenia]: '斯洛文尼亚',
    [CountryCode.SolomonIslands]: '所罗门群岛',
    [CountryCode.Somalia]: '索马里',
    [CountryCode.SouthAfrica]: '南非',
    [CountryCode.SouthGeorgiaAndSandwichIsl]: '南乔治亚和南桑威奇群岛',
    [CountryCode.SouthSudan]: '南苏丹',
    [CountryCode.Spain]: '西班牙',
    [CountryCode.SriLanka]: '斯里兰卡',
    [CountryCode.Sudan]: '苏丹',
    [CountryCode.Suriname]: '苏里南',
    [CountryCode.SvalbardAndJanMayen]: '斯瓦尔巴和扬马延',
    [CountryCode.Swaziland]: '斯威士兰',
    [CountryCode.Sweden]: '瑞典',
    [CountryCode.Switzerland]: '瑞士',
    [CountryCode.SyrianArabRepublic]: '叙利亚阿拉伯共和国',
    [CountryCode.Taiwan]: '台湾',
    [CountryCode.Tajikistan]: '塔吉克斯坦',
    [CountryCode.Tanzania]: '坦桑尼亚',
    [CountryCode.Thailand]: '泰国',
    [CountryCode.TimorLeste]: '东帝汶',
    [CountryCode.Togo]: '多哥',
    [CountryCode.Tokelau]: '托克劳',
    [CountryCode.Tonga]: '汤加',
    [CountryCode.TrinidadAndTobago]: '特立尼达和多巴哥',
    [CountryCode.Tunisia]: '突尼斯',
    [CountryCode.Turkey]: '土耳其',
    [CountryCode.Turkmenistan]: '土库曼斯坦',
    [CountryCode.TurksAndCaicosIslands]: '特克斯和凯科斯群岛',
    [CountryCode.Tuvalu]: '图瓦卢',
    [CountryCode.Uganda]: '乌干达',
    [CountryCode.Ukraine]: '乌克兰',
    [CountryCode.UnitedArabEmirates]: '阿拉伯联合酋长国',
    [CountryCode.UnitedKingdom]: '英国',
    [CountryCode.UnitedStates]: '美国',
    [CountryCode.UnitedStatesOutlyingIslands]: '美国本土外小岛屿',
    [CountryCode.Uruguay]: '乌拉圭',
    [CountryCode.Uzbekistan]: '乌兹别克斯坦',
    [CountryCode.Vanuatu]: '瓦努阿图',
    [CountryCode.Venezuela]: '委内瑞拉',
    [CountryCode.Vietnam]: '越南',
    [CountryCode.VirginIslandsBritish]: '英属维尔京群岛',
    [CountryCode.VirginIslandsUS]: '美属维尔京群岛',
    [CountryCode.WallisAndFutuna]: '瓦利斯和富图纳',
    [CountryCode.WesternSahara]: '西撒哈拉',
    [CountryCode.Yemen]: '也门',
    [CountryCode.Zambia]: '赞比亚',
    [CountryCode.Zimbabwe]: '津巴布韦',
  },

  mail: {
    [Mail.Variant.Registration]: {
      subject: '{serverName} - 注册账号',
      content: `
Hi,

你可以通过以下链接验证你在 {serverName} 的邮箱:
{link}

或者，你也可以使用验证码: {otp}

验证码 {ttl} 分钟以内有效。
如果你有任何顾虑或建议请联系我们。

{serverName}
`,
    },
    [Mail.Variant.AccountRecovery]: {
      subject: '{serverName} - 找回账户',
      content: `
Hi {name},

你可以通过下面的链接继续重设你在 {serverName} 的密码:
{link}

或者，你可以使用验证码: {otp}

验证码 {ttl} 分钟以内有效。

{serverName}
`,
    },
    [Mail.Variant.ChangeMail]: {
      subject: '{serverName} - 更改邮箱',
      content: `
Hi {name},

请使用下面的验证码继续更改你在 {serverName} 的邮箱:
{otp}

验证码 {ttl} 分钟以内有效。

{serverName}
`,
    },
  },
} satisfies GlobalI18n
