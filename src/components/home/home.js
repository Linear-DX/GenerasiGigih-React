import Img from "../img/img.js";
import ArtistName from "../artist/artist.js";
import TitleSong from "../titleSong/title.js";
import './home.css';


const home = () => {
    return (
        <div>
            <div class="playlist">
                <Img />
                <TitleSong />
                <ArtistName />
                <button type="submit">Select</button>
            </div>
        </div>
    );
};

export default home;