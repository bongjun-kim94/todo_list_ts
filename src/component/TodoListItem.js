import React from 'react';
import {
    Card,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import { Clear, Create } from "@material-ui/icons";

const TodoListItem = ({ todo }) => {
    const { text } = todo;
    return (
        <>
            <Card>
                <List
                    sx={{
                        width: 200,
                        height: 230,
                        bgcolor: "background.paper",
                        overflow: "auto",
                    }}
                    dense
                    component="div"
                    role="list"
                >
                    <ListItem role="listitem" button>
                        <ListItemIcon>
                            <Checkbox tabIndex={-1} disableRipple />
                        </ListItemIcon>
                        <ListItemText 
                            // style={{
                            //     textDecoration: checked ? "line-through" : null,
                            //     color: checked ? "#ccc" : "#000",
                            // }}
                        >
                            {text}
                        </ListItemText>
                        <IconButton color="secondary" aria-label="Delete">
                            <Create fontSize="small" />
                        </IconButton>
                        <IconButton color="secondary" aria-label="Delete">
                            <Clear fontSize="small" />
                        </IconButton>
                    </ListItem>
                </List>
            </Card>
        </>
    );
}

export default TodoListItem;