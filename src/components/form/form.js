import SearchEngine from "../../theme/searchEngine";

const form = ({ onSubmit, onChange }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <SearchEngine onChange={onChange} />
            </form>
        </div>
    )
}

export default form;