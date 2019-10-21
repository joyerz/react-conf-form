class UserManager {
  userInfo = {}
}

export default (() => {
  let i: any = null
  return () => {
    if (!i) {
      i = new UserManager()
    }
    return i
  }
})()

