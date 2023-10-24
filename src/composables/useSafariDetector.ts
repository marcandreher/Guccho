function detectClient() {
  const UA = navigator.userAgent.toLowerCase()
  return UA.includes('safari') && !UA.includes('chrome')
}
function detectServer() {
  const UA = useRequestHeaders(['user-agent'])['user-agent']?.toLowerCase()
  return UA?.includes('safari')
}

export default (def = false) =>
  // eslint-disable-next-line n/prefer-global/process
  (process.server
    ? detectServer()
    : detectClient())
  || def
