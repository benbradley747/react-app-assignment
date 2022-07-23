import { Button, Input, Paper, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, FormEventHandler, MouseEventHandler, useState } from "react";

interface ItemFormProps {
    addItem: (value: string) => void
}

const ItemForm: React.FC<ItemFormProps> = ({ addItem }) => {
    const [newItem, setNewItem] = useState<string>("");

    const handleSubmit = (event: FormEventHandler<HTMLInputElement>) => {
        event.preventDefault();
        addItem(newItem);
        setNewItem("");
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value);
    }

    return (
        <Paper elevation={4}>
            <div className='item-form-wrapper'>
                <form className="item-form">
                    <input id="outlined-basic" type="text" value={newItem} onChange={handleChange} />
                    <input type="submit" onClick={handleSubmit} />
                </form>
            </div>
        </Paper>
    )
}

export default ItemForm;