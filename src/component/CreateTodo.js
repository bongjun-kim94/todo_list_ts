import React, { useState } from 'react';
import { Button, InputBase } from "@material-ui/core";

function AddTodoForm() {
    const [todo, setTodo] = useState(null);

    const onSubmit = () => {

    };

    const handleChange = ({ target }) => {
        setTodo(target.value)
        console.log(target.value);
    }

    // const handleChange = ({ target }) => {
    //     setTodo(target.value)
    //     console.log(target.value);
    // }

    return (
        <div>
            <form onSubmit={onSubmit} style={{ display: "flex", margin: 10 }}>
                <InputBase
                    value={todo}
                    onChange={handleChange}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="TODO"
                    inputProps={{
                        "aria-label": "Description",
                    }}
                    style={{ width: "90%" }}
                    required
                />
                <Button type="submit" variant="text" style={{ width: "10%" }}>
                    Add
                </Button>
            </form>
        </div>
    );
}

export default AddTodoForm;