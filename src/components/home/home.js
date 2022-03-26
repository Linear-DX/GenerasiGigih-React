import Data from "../../data/all-sample.js";
import Img from "../img/img.js";
import ArtistName from "../artist/artist.js";
import TitleSong from "../titleSong/title.js";
import './home.css';


const Home = () => {
    const Loop = Data.map((item, index) => {
        return (
            <div key = {index}>
                <div className ="playlist">
                    <Img gambar = {item.album.images[1].url} />
                    <TitleSong judul = {item.name} />
                    <ArtistName artis = {item.album.artists[0].name} />
                    <button type="submit">Select</button>
                </div>
            </div>
        )
    })
    return(
        <div>{Loop}</div>
    )
};

export default Home;