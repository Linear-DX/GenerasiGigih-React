import queryString from 'query-string';
import { useState, useEffect } from 'react';
import Login from '../login/login';
import Search from '../search/search';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../reduxSlice/slice.js';

const Initiate = () => {
    // const [accessToken, setAccessToken] = useState("");
    const accessToken = useSelector((state) => state.token.value)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const parsed = queryString.parse(window.location.hash);
    //     setAccessToken(parsed.access_token);
    // }, [])

    useEffect(() => {
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token))
    }, [])

    if (accessToken !== undefined) {
        return (
            <Search />
        )
    }
    else {
        return (
            <Login />
        )
    }
}

export default Initiate;