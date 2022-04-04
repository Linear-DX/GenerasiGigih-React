const Profile = ({ fetchUserData, user}) => {
    return (
        <div>
            <button onClick={fetchUserData}>Initialization Profile</button>
            {user.user_id !== undefined && <p>Logged in as : {user.displayName}</p>}
        </div>
    )
}

export default Profile;