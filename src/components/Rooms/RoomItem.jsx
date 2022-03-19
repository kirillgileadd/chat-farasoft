import React from 'react';
import {ListItem, Typography} from "@mui/material";
import {StyledLink} from "../../UI/StyledLink";

const RoomItem = ({title, id}) => {
    return (
        <StyledLink to={`/chat?room=${id}`}>
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