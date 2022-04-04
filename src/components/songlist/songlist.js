import '../../App.css';
import Img from '../img/img';
import TitleSong from '../titleSong/title';
import ArtistName from '../artist/artist';
// import { useState } from 'react';


// const Playlist = ({gambar, judul, artis, index}) => {
//     const [active, setActive] = useState(null)
//     return (
//         <div key={index}>
//             <div className="playlist-wrapper">
//                 <Img gambar={gambar} />
//                 <TitleSong judul={judul} />
//                 <ArtistName artis={artis} />
//                 <button type="submit" onClick={() => setActive(!active)}>{ active ? 'Deselect' : 'Select'}</button> 
//             </div>
//         </div>
//     )
// }

const Songlist = ({ gambar, songName, artists, isSelected, handleSelectData, uri }) => {
    // const {artists, name: songName, isSelected, uri} = data
    return (
        <div className='playlist-wrapper'>
            <Img gambar={gambar} />
            <TitleSong judul={songName} />
            <ArtistName artis={artists.map(artists => artists.name).join(',')} />
            <button type="submit" className={isSelected ? "selectedButton" : "unselectedButton"} onClick={() => handleSelectData(uri)}>{isSelected ? 'Deselect' : 'Select'}</button>
        </div>
    )
}

export default Songlist;