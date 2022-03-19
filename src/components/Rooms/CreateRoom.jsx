import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useState} from "react";
import {StyledPaper} from "../../UI/StyledPaper";
import {TextField} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
};

function CreateRoom({open, setOpen, addNewRoom}) {
    const [inputValue, setInputValue] = useState('')

    const handleClose = () => setOpen(false);

    const addRoom = () => {
        if(inputValue) {
            addNewRoom(inputValue)
            setOpen(false)
            setInputValue('')
        }
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledPaper sx={style}>
                    <Typography
                        sx={{mb: 2}}
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        color={'primary.main'}
                    >
                        Text in a modal
                    </Typography>
                    <Box>
                        <TextField
                            sx={{
                                display: 'block',
                                mb: 2
                            }}
                            fullWidth
                            label={'Room name'}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <Button
                            variant={'contained'}
                            onClick={addRoom}
                        >
                            Create
                        </Button>
                    </Box>
                </StyledPaper>
            </Modal>
        </div>
    );
}

export default CreateRoom