import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.55),
    border: '1px solid #616161',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 1),
    },
    [theme.breakpoints.up('sm')]: {
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(-0.1)})`,
        transition: theme.transitions.create('width'),
    },
}));

const SearchEngineContainer = styled('div')(({ theme }) => ({
    width: '100vw',
    marginTop: '1.6rem'
}));

const SearchEngineWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
}));

const ButtonHover = styled('div')(({ theme }) => ({
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 1),
    },
}));

export default function SearchEngine({ onChange }) {
    return (
        <>
            <SearchEngineContainer>
                <SearchEngineWrapper>
                    <Search
                        style={{
                            width: '200px',
                        }}
                    >
                        <StyledInputBase
                            placeholder="Search term"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={onChange}
                        />
                    </Search>
                    <ButtonHover>
                        <Button variant="button" type="submit"
                            style={{
                                color: 'white',
                                opacity: 0.8,
                                border: '1px solid #616161',
                            }}>
                            SEARCH
                        </Button>
                    </ButtonHover>
                </SearchEngineWrapper>
            </SearchEngineContainer>
        </>
    )
}