import data from "../../data/single-sample.js";

const img = () => {
    return(
        <div>
            <img src={data.album.images[1].url} />
        </div>
    );
};

export default img;