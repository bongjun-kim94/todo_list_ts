import React, { useState, useRef, useEffect } from 'react';
import { Button, InputBase } from "@material-ui/core";

const CreateTodo = ({ handleSubmit }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef();

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

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit} style={{ display: "flex", margin: 10 }}>
                <InputBase
                    ref={inputRef}
                    value={value}
                    onChange={handleChange}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="TODO"
                    inputProps={{
                        "aria-label": "Description",
                    }}
                    style={{ width: "90%" }}
                    autoFocus
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