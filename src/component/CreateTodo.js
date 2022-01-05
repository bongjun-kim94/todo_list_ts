import React, { useState } from 'react';
import { Button, InputBase } from "@material-ui/core";

const CreateTodo = ({ handleSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(!value) return;
        handleSubmit(value);
        setValue('');
    };

    // const handleChange = ({ target }) => {
    //     setValue(target.value)
    //     console.log(target.value);
    // }

    return (
        <div>
            <form onSubmit={onSubmit} style={{ display: "flex", margin: 10 }}>
                <InputBase
                    value={value}
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

export default CreateTodo;