import styles from '../../App.module.css';
import Img from '../img/img';
import TitleSong from '../titleSong/title';
import ArtistName from '../artist/artist';

const Songlist = ({ gambar, songName, album, artists, isSelected, handleSelectData, uri }) => {
    console.log(album);
    return (
        <>
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