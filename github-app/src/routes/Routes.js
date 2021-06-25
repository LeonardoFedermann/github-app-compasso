import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchPage from '../pages/SearchPage'
import ProfilePage from '../pages/ProfilePage'
import FollowersPage from '../pages/FollowersPage'
import FollowingPage from '../pages/FollowingPage'
import ReposPage from '../pages/ReposPage'
import ErrorPage from '../pages/ErrorPage'
import FirstProfilePage from '../pages/FirstProfilePage'
import StarredPage from '../pages/StarredPage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>
                <Route exact path="/first-profile/:username">
                    <FirstProfilePage />
                </Route>
                <Route exact path="/profile/:username">
                    <ProfilePage />
                </Route>
                <Route exact path="/followers/:username">
                    <FollowersPage />
                </Route>
                <Route exact path="/following/:username">
                    <FollowingPage />
                </Route>
                <Route exact path="/repos/:username">
                    <ReposPage />
                </Route>
                <Route exact path="/starred/:username">
                    <StarredPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}