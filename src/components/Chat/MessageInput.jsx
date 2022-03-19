import React, {useState} from 'react';
import {Box, IconButton, TextareaAutosize} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = () => {
    const [messageValue, setMessageValue] = useState('')
    return (
        <Box
            component={'form'}
            display={'flex'}
            alignItems={'center'}
        >
            <TextareaAutosize
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                aria-label="minimum height"
                maxRows={3}
                placeholder="Your message"
                style={{
                    width: "100%",
                    outline: 'none',
                    border: 'none',
                    resize: 'none'
                }}
            />
            <IconButton
                sx={{width: 40, height: 40, color: 'primary.main'}}
            >
                <SendIcon/>
            </IconButton>
        </Box>
    );
};

export default MessageInput;