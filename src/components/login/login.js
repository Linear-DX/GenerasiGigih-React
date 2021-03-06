import '../../App.css';

const Login = () => {
    var client_id = process.env.REACT_APP_SPOTIFY_KEY;
    // var redirect_uri = 'http://localhost:3000/';
    var redirect_uri = 'https://generasi-gigih-react-chrismario-linear.vercel.app/';
    var scope = 'playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

    return (
        <div className="loginHome-wrapper">
            <a className="loginHome" href={url}>
                <button>Login</button>
            </a>
        </div>
    )
}

export default Login;