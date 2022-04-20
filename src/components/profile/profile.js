// import Button from '@mui/material/Button';

const Profile = ({ user}) => {
    return (
        <div>
            {user.user_id !== undefined && <p>Logged in as : {user.displayName}</p>}
        </div>
    )
}

export default Profile;