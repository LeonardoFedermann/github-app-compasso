import { BASE_URL } from './base url/BaseURL'
import { getUsersTest } from '../tests and mocks/tests/getUsersTest'
import { getReposTest } from '../tests and mocks/tests/getReposTest';
import { getStarredTest } from '../tests and mocks/tests/getStarredTest';
import { getFollowersTest } from '../tests and mocks/tests/getFollowersTest';
import { getFollowingUsersTest } from '../tests and mocks/tests/getFollowingUsersTest';

describe("Testing requests", () => {
  const username = 'aniltonveiga'
  // All tests were ellaborated based on "aniltonveiga" user, thus all its assertions values come from its
  // information. If "username" variable's value or "aniltonveiga"'s information are altered, tests assertions
  // must be updated.

  test(
    "Testing get user request, therefore it should return a user and the quantity of its starred repos",
    () => getUsersTest(BASE_URL, username)
  )

  test(
    "Testing get repos request, therefore it should return an array of repos of a user and its quantity",
    () => getReposTest(BASE_URL, username)
  )

  test(
    "Testing get starred request, therefore it should return an array of starred repos of a user",
    () => getStarredTest(BASE_URL, username)
  )

  test(
    "Testing get followers request, therefore it should return an array of followers of a user and its quantity",
    () => getFollowersTest(BASE_URL, username)
  )

  test(
    "Testing get following users request, therefore it should return an array of following users and its quantity",
    () => getFollowingUsersTest(BASE_URL, username)
  )
})