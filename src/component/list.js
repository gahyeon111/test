import React, { useState } from "react";
import { List } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function FileList(props) {
    const handleButtonClickHead = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const handleButtonClickDelete = (e, i) => {
        e.preventDefault();
        e.stopPropagation();
        props.setDataTransferList(prev => prev.filter((element, index) => index !== i));
        props.dataFileCounter.current--;
        console.log(props.dataTransferList.length)
    }

    const size = (element) => {
        var size;
        size = Math.round(element.file.size / 1048576 * 10) / 10;
        size = (size > 0)
            ? (Math.round(element.file.size / 1048576 * 10) / 10) + 'MB'
            : (Math.round(element.file.size / 1024 * 10) / 10) + 'KB';
        return size;
    }

    return (
        <div>
            <div
                className="b-inner-dragdrop-list-header"
                onClick={handleButtonClickHead}>
                <div style={{ paddingLeft: "16px" }}>order</div>
                <div style={{ width: "100%", textAlign: "center" }}>file name</div>
                <div style={{ marginRight: "20%", textAlign: "center" }}>size</div>
                <div style={{ paddingRight: "16px" }}>delete</div>
            </div>
            <div className="b-inner-dragdrop-list-element"
                onChange={handleButtonClickDelete}>
                <List>
                    {
                        props.dataTransferList.map((element, i) => {
                            return (
                                <div
                                    key={i}>
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete"
                                                onClick={(e) => { handleButtonClickDelete(e, i) }}>
                                                <RemoveCircleOutlineIcon />
                                            </IconButton>
                                        }>
                                        <ListItemAvatar>
                                            <MenuIcon />
                                        </ListItemAvatar>
                                        <div className="b-inner-dragdrop-list-element-text" style={{ width: "100%" }}><i>{element.file.name}</i></div>
                                        <div className="b-inner-dragdrop-list-element-text" style={{ marginRight: "20%", textAlign: "center" }}><i>{size(element)}</i></div>
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            );
                        })
                    }
                </List>
            </div>
        </div >
    );
}

export default FileList;