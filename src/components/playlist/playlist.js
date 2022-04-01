import '../home/home.css';
import Img from '../img/img';
import TitleSong from '../titleSong/title';
import ArtistName from '../artist/artist';
import { useState } from 'react';


const Playlist = ({gambar, judul, artis, index}) => {
    const [active, setActive] = useState(null)
    return (
        <div key={index}>
            <div>
                <Img gambar={gambar} />
                <TitleSong judul={judul} />
                <ArtistName artis={artis} />
                <button type="submit" onClick={() => setActive(!active)}>{ active ? 'Deselect' : 'Select'}</button>
                
            </div>
        </div>
    )
}

export default Playlist;