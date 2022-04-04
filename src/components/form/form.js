const form = ({ onSubmit, onChange }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} />
                <button type="submit"> Search</button>
            </form>
        </div>
    )
}

export default form;