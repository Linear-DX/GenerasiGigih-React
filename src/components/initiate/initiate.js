import queryString from 'query-string';
import { useEffect } from 'react';
import Login from '../login/login';
// import Search from '../search/search';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../reduxSlice/slice.js';
import { useHistory } from 'react-router-dom';

const Initiate = () => {
    // const [accessToken, setAccessToken] = useState("");
    const accessToken = useSelector((state) => state.token.value)
    const dispatch = useDispatch();
    const history = useHistory();

    // useEffect(() => {
    //     const parsed = queryString.parse(window.location.hash);
    //     setAccessToken(parsed.access_token);
    // }, [])

    useEffect(() => {
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token))
    }, [accessToken, dispatch])

    useEffect(() => {
        accessToken !== undefined && (
        history.push("create-playlist"))    
    })

    // if (accessToken !== undefined) {
    //     return (
    //         <Search />
    //     )
    // }
    // else {
    //     return (
    //         <Login />
    //     )
    // }
    return (
        <div>
            <Login />
        </div>
    )

}

export default Initiate;