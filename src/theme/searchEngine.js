import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import { fontWeight } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.55),
    border: '1px solid #616161',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 1),
    },
    marginRight: theme.spacing(2),
    marginTop: '10px',
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(65),
        width: '200px',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function SearchEngine({ onChange }) {
    return (
        <>
            <Search>
                <StyledInputBase
                    placeholder="Search term"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={onChange}
                />
            </Search>
            <Button variant="text" type="submit"
                style={{
                    position: 'relative',
                    marginTop: '12px',
                    color: 'white',
                    marginLeft: '11.5rem',
                    opacity: 0.8,
                    border: '1px solid #616161',
                }}>
                SEARCH
            </Button>
        </>
    )
}