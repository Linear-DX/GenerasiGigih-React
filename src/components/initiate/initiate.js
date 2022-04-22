import queryString from 'query-string';
import { useEffect } from 'react';
import Login from '../login/login';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../../reduxSlice/slice';
import { useHistory } from 'react-router-dom';

const Initiate = () => {
    const accessToken = useSelector((state) => state.token.value)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const parsed = queryString.parse(window.location.hash);
        dispatch(setAccessToken(parsed.access_token))
    }, [accessToken, dispatch])

    useEffect(() => {
        accessToken !== undefined && (
            history.push("create-playlist"))
    })

    return (
        <div>
            <Login />
        </div>
    )

}

export default Initiate;