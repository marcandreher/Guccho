import type { IdType } from '$active/config'

export const createUserQuery = (handle: string | IdType, selectAgainst: Array<'id' | 'name' | 'safeName' | 'email'> = ['id', 'name', 'safeName']) => {
  let handleNum = handle
  const handleStr = handle.toString().trim()
  if (typeof handleNum === 'string') {
    handleNum = parseInt(handleNum)
    if (isNaN(handleNum))
      handleNum = -1
  }

  return {
    where: {
      AND: [
        {
          OR: [
            selectAgainst.includes('id')
              ? {
                  id: handleNum,
                }
              : undefined,
            selectAgainst.includes('name')
              ? {
                  name: handleStr,
                }
              : undefined,
            selectAgainst.includes('safeName')
              ? {
                  safeName: handleStr.startsWith('@') ? handleStr.slice(1) : handleStr,
                }
              : undefined,
            selectAgainst.includes('email')
              ? {
                  email: handleStr,
                }
              : undefined,
          ].filter(Boolean) as Array<{ id: IdType } | { name: string } | { safeName: string } | { email: string }>,
        },
        {
          priv: {
            gte: 1,
          },
        },
      ],
    },
  }
}
