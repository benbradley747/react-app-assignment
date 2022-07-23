import { ItemData } from './Container';
import { Paper } from '@mui/material';
import Item from './Item';
import ClearIcon from '@mui/icons-material/Clear';

interface ItemListProps {
    items: ItemData[],
    deleteItem: (id: number) => void
}

const ItemList: React.FC<ItemListProps> = ({ items, deleteItem }) => {
    return (
        <Paper elevation={4}>
            <div className='item-list-wrapper'>
                <h3 className="item-list-title">My items ({items.length})</h3>
                <ul className="item-list">
                    {items.map(item => (
                        <li>
                            <div className='itemWrapper'>
                                <Paper elevation={4}>
                                    <div className='item-card'>
                                        <Item key={item.name} item={item} />
                                        <span className='del-btn' onClick={() => deleteItem(item.id)}>
                                            <ClearIcon />
                                        </span>
                                    </div>
                                </Paper>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Paper>
    )
}

export default ItemList;