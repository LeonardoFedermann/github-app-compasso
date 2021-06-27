import { getReposMock } from '../mocks/getReposMock'

export const getReposTest = async (BASE_URL, username) => {
  const result = await getReposMock(BASE_URL, username)
  const { repos, quantity } = result
  expect(quantity).toBe(13)
  expect(repos[12].name).toBe('woo-quick-custumer-history')
}