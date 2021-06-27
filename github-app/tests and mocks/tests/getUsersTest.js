import { getUserMock } from '../mocks/getUserMock'

export const getUsersTest = async (BASE_URL, username) => {
  const result = await getUserMock(BASE_URL, username)
  const { user, starred } = result
  expect(user.name).toBe("Anilton Veiga")
  expect(starred.length).toBe(1)
}