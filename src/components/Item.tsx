import { ItemData } from './Container';

interface ItemProps {
    item: ItemData,
};

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div className="item">
            {item.name}
        </div>
    );
};

export default Item;