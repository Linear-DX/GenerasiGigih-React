import SearchEngine from "../../theme/searchEngine";

const form = ({ onSubmit, onChange }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                {/* <input onChange={onChange} />
                <button type="submit"> Search</button> */}
                {/* <input onChange={onChange} />
                <button type="submit"> Search</button><br /> */}
                <SearchEngine onChange={onChange}/>
            </form>
        </div>
    )
}

export default form;