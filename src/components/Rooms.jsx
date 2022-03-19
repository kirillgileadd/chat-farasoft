import React, {useState} from 'react';
import {Button, List, ListItem, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {StyledPaper} from "../UI/StyledPaper";
import CreateRoom from "./CreateRoom";
import RoomItem from "./RoomItem";

const Rooms = () => {
    const [rooms, setRooms] = useState([
        {id: 1, title: 'react'}
    ])
    const [modal, setModal] = useState(false)

    const addNewRoom = (title) => {
        let newRoom = {
            title,
            id: Date.now()
        }
        setRooms(prev => [...prev, newRoom])
    }

    return (
        <StyledPaper>
            <Typography
                sx={{mb: 4, textAlign: 'center'}}
                fontWeight={'bold'}
                variant={'h4'}
                color={'primary.main'}
            >
                Choose or create the room
            </Typography>
            <List
                sx={{
                    display: 'flex',
                    maxWidth: "1000px",
                    flexWrap: 'wrap',
                    '& .MuiListItem-root': {
                        marginRight: "8px",
                        marginBottom: '8px'
                    }
                }}
            >
                {
                    rooms.map((room) => <RoomItem key={room.id} {...room}/>)
                }

            </List>
            <Button
                onClick={() => setModal(true)}
                variant={'outlined'}
            >
                <Typography>
                    Create a new room
                </Typography>
                <AddIcon/>
            </Button>
            <CreateRoom open={modal} setOpen={setModal} addNewRoom={addNewRoom}/>
        </StyledPaper>
    );
};

export default Rooms;