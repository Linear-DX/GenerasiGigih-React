import Songlist from "../songlist/songlist.js";

const Home = ({ mergedData, handleSelectData }) => {

    return mergedData.map((data) => {
        const { uri } = data;
        return (
            <div>
                <Songlist
                    key={uri}
                    uri={uri}
                    gambar={data.album.images[1].url}
                    songName={data.name}
                    album={data.album.name}
                    artists={data.artists}
                    handleSelectData={handleSelectData}
                    isSelected={data.isSelected}
                />
            </div>
        )
    })
};

export default Home;