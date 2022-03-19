import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {StyledPaper} from "../UI/StyledPaper";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from 'react-router-dom'
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Join = ({isAuth}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {location} = useSelector(state => state.auth);
    const [name, setName] = useState('')

    const login = () => {
        setUser()
        navigate(location ? `${location?.pathname}${location?.search}` : '/rooms')
    }

    const setUser = () => {
        if(name) {
            dispatch(AuthActionCreators.setUser(name))
        } else {
            alert('Please enter name')
        }
    }
    if (isAuth) {
        return <Navigate to="/rooms" replace={true} />
    }

    return (
        <StyledPaper>
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography
                    sx={{mb: 4, textAlign: 'center'}}
                    fontWeight={'bold'}
                    variant={'h4'}
                    color={'primary'}
                >
                    Enter your name!
                </Typography>
                <Box
                    sx={{
                        '& .MuiTextField-root': {
                            width: "100%",
                            marginBottom: 2
                        }
                    }}
                    component='form'
                    onSubmit={login}
                >
                    <TextField
                        type="text"
                        label={'Name'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                        <Button
                            type={'submit'}
                            variant={'contained'}
                        >
                            Connect
                        </Button>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default Join;