const Playlist = ({ handleAddPlaylistOnChange, handleAddPlaylistOnSubmit, addPlaylistData }) => {
    return (
        <div>
            <h2>Create Playlist</h2>

            <form onSubmit={handleAddPlaylistOnSubmit}>
                <label htmFor="title">Playlist Name</label><br />
                <input
                    type="text"
                    value={addPlaylistData.title}
                    onChange={handleAddPlaylistOnChange}
                    name="title"
                    minLength="10"
                    required />
                <br />

                <label htmFor="description">Description</label><br />
                <textarea
                    value={addPlaylistData.description}
                    onChange={handleAddPlaylistOnChange}
                    name="description"
                    label="Description"
                >
                </textarea>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Playlist;