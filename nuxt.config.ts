import { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import './scripts/ensure-env'
import { Lang, Rank } from './src/def'
import { CountryCode } from './src/def/country-code'
import PackageJSON from './package.json'
import type {
  LeaderboardRankingSystem,
} from '~/def/common'

interface AppConfigItemBase {
  icon: string
}

export default defineNuxtConfig({
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  srcDir: 'src/',

  build: {
    transpile: ['trpc-nuxt'],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-icon',
  ],

  alias: {
    $active: fileURLToPath(new URL(`./src/server/backend/${env.BACKEND}`, import.meta.url)),
    $base: fileURLToPath(new URL('./src/server/backend/$base', import.meta.url)),
  },

  vite: {
  },

  vue: {
    defineModel: true,
  },

  typescript: {
    strict: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/main.scss',
    '~/components/content/styles/typography.scss',
    '~/assets/styles/transitions.scss',
    '~/assets/styles/daisyui.scss',
    '~/assets/styles/popper.scss',
  ],

  app: {
    pageTransition: {
      name: 'slide',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
    head: {
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      bodyAttrs: {
        // @ts-expect-error it's fine
        tabindex: '-1',
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: 'dev.ppy.sb',
      version: PackageJSON.version as `${number}.${number}.${number}`,
      leaderboardRankingSystem: {
        [Rank.PPv2]: {
          userpage: {
            show: 'tab',
          },
          icon: 'pp',
        },
        [Rank.PPv1]: {
          userpage: {
            show: 'dropdown',
          },
          icon: 'pp',
        },
        [Rank.RankedScore]: {
          userpage: {
            show: 'tab',
          },
          icon: 'score',
        },
        [Rank.TotalScore]: {
          userpage: {
            show: 'tab',
          },
          icon: 'score',
        },
      } satisfies Record<
        LeaderboardRankingSystem,
        AppConfigItemBase & {
          userpage: {
            show: 'tab' | 'dropdown'
          }
        }
      >,
      appModalTeleportTargetId: 'app-modal-portal',
      needConfirmWebsite: false,
    },
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: Lang.enGB,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'g-lang',
      redirectOn: 'root', // recommended
    },
    locales: [
      {
        code: Lang.enGB,
        flag: CountryCode.UnitedKingdom,
        name: 'English (International)',
      },
      {
        code: Lang.frFR,
        flag: CountryCode.France,
        name: 'French (France)',
      },
      {
        code: Lang.zhCN,
        flag: CountryCode.China,
        name: '简体中文 (中国)',
      },
    ],
  },

  experimental: {
    componentIslands: true,
    // viewTransition: true,
    // asyncContext: true,
    headNext: true,
    inlineRouteRules: true,
    typedPages: true,
    typescriptBundlerResolution: true,
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },

})
