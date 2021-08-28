import { BASE_URL } from './base url/BaseURL'
import { getUsersTest } from '../tests and mocks/tests/getUsersTest'
import { getReposTest } from '../tests and mocks/tests/getReposTest';
import { getStarredTest } from '../tests and mocks/tests/getStarredTest';
import { getFollowersTest } from '../tests and mocks/tests/getFollowersTest';
import { getFollowingUsersTest } from '../tests and mocks/tests/getFollowingUsersTest';

describe("Testing requests", () => {
  const username = 'aniltonveiga'

  test(
    "Testing get user request, which is expected to return a user and the quantity of its starred repos",
    () => getUsersTest(BASE_URL, username)
  )

  test(
    "Testing get repos request, which is expected to return an array of repos of a user and its quantity",
    () => getReposTest(BASE_URL, username)
  )

  test(
    "Testing get starred request, which is expected to should return an array of starred repos of a user",
    () => getStarredTest(BASE_URL, username)
  )

  test(
    "Testing get followers request, which is expected to should return an array of followers of a user and its quantity",
    () => getFollowersTest(BASE_URL, username)
  )

  test(
    "Testing get following users request, which is expected to should return an array of following users and its quantity",
    () => getFollowingUsersTest(BASE_URL, username)
  )
})