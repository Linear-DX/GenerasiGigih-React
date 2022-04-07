import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Initiate from "../components/initiate/initiate";
import Playlist from "../components/playlist/playlist";
import Login from "../components/login/login";
import Search from "../components/search/search";
import Profile from "../components/profile/profile";
import { useSelector } from 'react-redux';

function AppRouter() {
    const accessToken = useSelector((state) => state.token.value);
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Initiate />
                </Route>
                <Route path="/create-playlist">
                    {accessToken !== undefined ? (<Search />) : (<Redirect to="/" />)}
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;