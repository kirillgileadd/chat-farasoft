import React from 'react';
import {Box, Button, List, ListItem, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {StyledLink} from "../../UI/StyledLink";

const Aside = ({users}) => {
    return (
        <Box sx={{mt: '14px'}}>
            <Button variant={'contained'}>
                <StyledLink to={'/rooms'}>
                    Rooms
                </StyledLink>
            </Button>
        <Box sx={{mt: 2}}>
            <Typography
                color={"white"}
                variant={'h6'}
            >
                Users: {users.length}
            </Typography>
            <List disablePadding>
                {users.map((user) => (
                    <ListItem disablePadding sx={{color: 'white'}} key={user.id}>{user.name}</ListItem>
                ))}
            </List>
        </Box>
        </Box>
    );
};

export default Aside;