import React from 'react';
import {ListItem, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";
import {StyledLink} from "../UI/StyledLink";

const RoomItem = ({title}) => {
    const location = useLocation()
    return (
        <StyledLink to={`/chat/${location.search}&room=${title}`}>
            <ListItem
                sx={{
                    cursor: 'pointer',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "150px",
                    height: "150px",
                    backgroundColor: 'primary.main',
                    borderRadius: "5px"
                }}
            >
                <Typography
                    color={'white'}
                    variant={'h6'}
                    fontWeight={'bold'}
                >
                    {title}
                </Typography>
            </ListItem>
        </StyledLink>
    );
};

export default RoomItem;