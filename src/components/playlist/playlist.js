const Playlist = ({ handleAddPlaylistOnChange, handleAddPlaylistOnSubmit, addPlaylistData }) => {
    return (
        <div>
            <h2>Create Playlist</h2>
            
            <form onSubmit={handleAddPlaylistOnSubmit}>
                {/* <label htmFor="title">Title</label><br /> */}
                <input type="text" value={addPlaylistData.title} onChange={handleAddPlaylistOnChange} name="title"  required />
                <br />
                <textarea value={addPlaylistData.description} onChange={handleAddPlaylistOnChange} name="description"></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Playlist;