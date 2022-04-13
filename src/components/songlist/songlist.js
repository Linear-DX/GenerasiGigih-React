import styles from '../../App.module.css';
import Img from '../img/img';
import TitleSong from '../titleSong/title';
import ArtistName from '../artist/artist';
import Button from '@mui/material/Button';
// import PrimarySearchAppBar from '../../theme/appbar';

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

const Songlist = ({ gambar, songName, album, artists, isSelected, handleSelectData, uri }) => {
    console.log(album);
    // const {artists, name: songName, isSelected, uri} = data
    return (
        <>
        {/* <PrimarySearchAppBar /> */}
        <div className={styles.SonglistWrapper}>
            <Img gambar={gambar} className={styles.SonglistWrapperImage} />
            <div className={styles.SonglistWrapperText}>
                <TitleSong judul={songName} />
                <p>{album}</p>
                <ArtistName artis={artists.map(artists => artists.name).join(',')} />
                <button type="submit" className={isSelected ? "selectedButton" : "unselectedButton"} onClick={() => handleSelectData(uri)}>{isSelected ? 'Deselect' : 'Select'}</button>
            </div>
        </div>
        </>
    )
}

export default Songlist;