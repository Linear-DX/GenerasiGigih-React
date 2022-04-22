// import Button from '@mui/material/Button';

const Profile = ({ user }) => {
    return (
        <div>
            {/* <Button onClick={fetchUserData} variant="contained">Initialization Profile</Button> */}
            {user.user_id !== undefined && <p>Logged in as : {user.displayName}</p>}
        </div>
    )
}

export default Profile;