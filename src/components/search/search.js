import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from '../home/home';
import Profile from "../profile/profile.js";
import Playlist from "../playlist/playlist.js";
import Form from '../form/form';
import { useSelector } from 'react-redux';



const Search = () => {
    const accessToken = useSelector((state) => state.token.value);
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedData, setSelectedData] = useState([]);
    const [mergedData, setMergedData] = useState([]);
    const [user, setUser] = useState({
        displayName: '',
        imagesUrl: '',
        user_id: undefined
    })

    useEffect(() => {
        const mergedDataWithSelectedData = data.map((data) => ({
            ...data,
            isSelected: !!selectedData.find((selectedData) => selectedData === data.uri),
        }));
        setMergedData(mergedDataWithSelectedData);
    }, [selectedData, data]);

    const handleSelectData = (uri) => {
        const alreadySelected = selectedData.find(selectedData => selectedData === uri)
        if (alreadySelected) {
            setSelectedData(selectedData.filter(selectedData => selectedData !== uri))
        } else {
            setSelectedData((selectedData) => [...selectedData, uri])
        }
        console.log(selectedData);
    };

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

    const handleOnSubmit = (e) => {
        e.preventDefault();
        getData(accessToken)
    }

    const fetchUserData = async () => {
        const data = await axios
            .get(`https://api.spotify.com/v1/me?access_token=${accessToken}`)
            .catch((err) => err)
        setUser({ ...user, displayName: data.data.display_name, user_id: data.data.id })
        console.log(data);
    }

    const [addPlaylistData, setAddPlaylistData] = useState({
        title: '',
        description: ''
    })

    const [playlistID, setPlaylistID] = useState();
    const params = {
        name: addPlaylistData.title,
        description: addPlaylistData.description,
        collaborative: false,
        public: false
    }

    const header = {
        Authorization: `Bearer ${accessToken}`
    }

    const handleAddPlaylistOnChange = e => {
        const { name, value } = e.target;
        setAddPlaylistData({ ...addPlaylistData, [name]: value })
    }

    const handleAddPlaylistOnSubmit = async e => {
        e.preventDefault();
        console.log(addPlaylistData);
        await axios
            .post(`https://api.spotify.com/v1/users/${user.user_id}/playlists`, params, { headers: header })
            .then((res) => (handleAddItemToPlaylist(res.data.id)))
            .catch((err) => err)
    }

    const item = { uris: selectedData }

    const handleAddItemToPlaylist = async (id) => {
        setPlaylistID(id);
        const data = await axios
            .post(`https://api.spotify.com/v1/playlists/${id}/tracks`, item, { headers: header })
            .catch((err) => err)
        console.log(data);
    }

    return (
        <div className="searchHome-wrapper">
            <Profile fetchUserData={fetchUserData} user={user} />
     
            {user.user_id !== undefined && (
                <>
                    <Playlist
                        handleAddPlaylistOnChange={handleAddPlaylistOnChange}
                        handleAddPlaylistOnSubmit={handleAddPlaylistOnSubmit}
                        addPlaylistData={addPlaylistData}
                        playlistID={playlistID}
                        selectedData={selectedData}
                    />
                    <Form onChange={handleOnChange} onSubmit={handleOnSubmit} />
                </>
            )}
            <br />

            {mergedData !== undefined && (
                <Home mergedData={mergedData} handleSelectData={handleSelectData} />
            )

            }
        </div>
    )
}

export default Search;