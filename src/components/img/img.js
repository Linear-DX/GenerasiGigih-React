const img = ({gambar, title}) => {
    return(
        <div>
            <img src={gambar} alt={title} />
        </div>
    );
};

export default img;