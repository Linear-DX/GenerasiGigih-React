import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Initiate from "../components/initiate/initiate";
import Search from "../components/search/search";
import { useSelector } from 'react-redux';


function AppRouter() {
    const accessToken = useSelector((state: any) => state.token.value);
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