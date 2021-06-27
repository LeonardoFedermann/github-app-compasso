import { getStarredMock } from '../mocks/getStarredMock'

export const getStarredTest = async (BASE_URL, username) => {
    const result = await getStarredMock(BASE_URL, username)
    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('dctb-express-sequelize')
}