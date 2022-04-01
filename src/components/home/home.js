import React, { useState } from "react";
import Img from "../img/img.js";
import ArtistName from "../artist/artist.js";
import TitleSong from "../titleSong/title.js";
import './home.css';
import Playlist from "../playlist/playlist.js";

const Home = ({ data }) => {
    const Loop = data.map((item, index) => {
        return (
            <div key={index}>
                <div className="playlist">
                    <Playlist
                        gambar={item.album.images[1].url}
                        judul={item.name}
                        artis={item.album.artists[0].name}
                    />
                    {/* <button type="submit" onClick={() => setActive(index)}>{active !== index ? 'Select' : 'Deselect'}</button> */}
                </div>
            </div>
        )
    })
    return (
        <div >{Loop}</div>
    )
};

export default Home;