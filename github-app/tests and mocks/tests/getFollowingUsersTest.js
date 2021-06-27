import { getFollowingUsersMock } from '../mocks/getFollowingUsersMock'

export const getFollowingUsersTest = async (BASE_URL, username) => {
    const result = await getFollowingUsersMock(BASE_URL, username)
    const { followingUsers, quantity } = result
    expect(quantity).toBe(5)
    expect(followingUsers[4].login).toBe('Nightsd01')
}