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

    // const Loop = data.map((item, index) => {
    //     return (
    //         <div key={index}>
    //             <div>
    //                 <Playlist
    //                     gambar={item.album.images[2].url}
    //                     judul={item.name}
    //                     artis={item.album.artists[0].name}
    //                 />
    //             </div>
    //         </div>
    //     )
    // })
    // return (
    //     <div>{Loop}</div>
    // )

    // return <>{renderData()}</>
};

export default Home;