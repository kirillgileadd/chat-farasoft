import React from 'react';
import {Box, Typography} from "@mui/material";
import {StyledPaper} from "../../UI/StyledPaper";
import Message from "./Message";
import MessageInput from "./MessageInput";
import Aside from "./Aside";

const headerStyle = {
    width: "100%",
    padding: 2,
    borderRadius: '10px 10px 0px 0px',
    backgroundColor: 'primary.main'
}

const paperStyle = {
    height: 'calc(100% - 56px)',
    borderRadius: '0px 0px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between'
}

const Chat = () => {
    const messages = [
        {text: 'asdfasd', username: 'kir'}
    ]
    const users = [
        {name: 'kir', id: 1}
    ]

    return (
        <Box display={'flex'}>
            <Aside users={users}/>
            <Box sx={{
                ml: 4,
                width: 500,
                height: 600
            }}>
                <Box sx={headerStyle}>
                    <Typography color={"white"} variant={'h6'}>React</Typography>
                </Box>
                <StyledPaper sx={paperStyle}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        sx={{width: '100%'}}
                    >
                        <Box sx={{height: '100%'}}>
                            {messages.map((message) => <Message {...message}/>)}
                        </Box>
                        <MessageInput/>
                    </Box>
                </StyledPaper>
            </Box>
        </Box>
    );
};

export default Chat;