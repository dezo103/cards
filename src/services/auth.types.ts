export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}
export type UserType = {
  avatar?: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
