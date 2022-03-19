import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {StyledPaper} from "../UI/StyledPaper";
import {StyledLink} from "../UI/StyledLink";

const Join = ({name, setName}) => {
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
                >
                    <TextField
                        type="text"
                        label={'Name'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <StyledLink to={`/rooms?name=${name}`}
                                onClick={(e) => !name ? e.preventDefault() : null}
                    >
                        <Button variant={'contained'}>
                            Connect
                        </Button>

                    </StyledLink>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default Join;