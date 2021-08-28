import { getFollowersMock } from '../mocks/getFollowersMock'

export const getFollowersTest = async (BASE_URL, username) => {
    const result = await getFollowersMock(BASE_URL, username)
    const { followers, quantity } = result
    expect(quantity).toBe(30)
    expect(followers[29].login).toBe('philoureiro')
}