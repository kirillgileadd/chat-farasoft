import React from 'react';
import {Box, Typography} from "@mui/material";

const Message = ({text, username}) => {
    return (
        <Box sx={{padding: 2,}}>
            <Typography
                sx={{
                    wordWrap: 'break-word',
                    maxWidth: '100%',
                    display: 'inline-block',
                    fontSize: '14px',
                    padding: 2,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                }}
            >
                {text}
            </Typography>
            <Typography sx={{fontSize: '14px'}}>
                {username}
            </Typography>
        </Box>
    );
};

export default Message;