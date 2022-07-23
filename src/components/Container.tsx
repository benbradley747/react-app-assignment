import { useState } from 'react'
import ItemForm from './ItemForm';
import ItemList from './ItemList';

export type ItemData = {
    id: number,
    name: string
};

function Container() {
    const [count, setCount] = useState<number>(0);
    const [items, setItems] = useState<Array<ItemData>>([]);

    const addItem = (value: string) => {
        if (value.trim().length !== 0) {
            setItems(items => [...items, {
                id: count,
                name: value.trim()
            }]);
            setCount(count + 1);
        }
    }

    const deleteItem = (id: number) => {
        setItems(items.filter(x => x.id !== id));
    }

    return (
        <div className='Container'>
            <h1>Manage my items</h1>
            <ItemForm addItem={addItem} />
            <ItemList items={items} deleteItem={deleteItem} />
        </div>
    )
}

export default Container;