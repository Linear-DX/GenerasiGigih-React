import data from "../../data/single-sample.js";

const artistName = () => {
    return (
        <div>
            <p>{data.album.artists[0].name}</p>
        </div>
    );
};

export default artistName;