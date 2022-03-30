import axios from 'axios';
import { useState } from 'react';
import Home from '../home/home';

const Search = ({ accessToken }) => {

    const [data, setData] = useState();
    const [query, setQuery] = useState("");

    const getData = async (accessToken) => {
        const data = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`)
            .then((res) => res)
            .catch((err) => err);
        setData(data.data.tracks.items);
        console.log(data);
    }

    const handleOnChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className="searchHome-wrapper">
            <input onChange={handleOnChange} />
            <button onClick={() => { getData(accessToken) }}>Search</button>

            {data !== undefined && (
                <Home data={data}/>
            )

            }
        </div>
    )
}

export default Search;