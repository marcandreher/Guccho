import type { GucchoError } from '~/def/messages'
import { root } from '~/common/utils/locales'

export function fromGucchoErrorCode<T extends GucchoError>(err: T): `G:${T}` {
  return `G:${err}`
}
export function toGucchoErrorCode<T extends GucchoError>(err: `G:${T}`): T {
  return Number.parseInt(err.slice(2)) as unknown as T
}

export function isGucchoError(input: string): input is `G:${GucchoError}` {
  return input.startsWith('G:')
}

export function formatGucchoError(input: { message: string }, params?: Record<string, unknown>): string {
  const { t } = useI18n({ useScope: 'global' })
  return formatGucchoErrorWithT(t, input, params)
}

export function formatGucchoErrorWithT(t: (input: string, params: unknown) => string, input: { message: string }, params?: Record<string, unknown>): string {
  const { message } = input

  if (!isGucchoError(message)) {
    return message
  }

  return t(`error.${toGucchoErrorCode(message)}`, params as any)
}

const pError = root.error
export function formatGucchoErrorCodeWithT(t: (input: string, params: unknown) => string, input: GucchoError, params?: Record<string, unknown>): string {
  return t(pError[input].__path__, params)
}
