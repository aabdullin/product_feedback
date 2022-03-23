
import ProductFeedbackCard from "./ProductFeedback"
import { useProductFeedback } from './ProductFeedbackContext';
import { ItemType, items } from '../db';

interface TagsBoardProps {
    items: Array<ItemType>
};

function TagsBoard ({ items } : TagsBoardProps){
    const { filter } = useProductFeedback();

    return (
        <>
            <div className="tags">
                {items.map((item, index) => {
                    return (
                        <button onClick={() => filter}>
                            {item.tag}
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default TagsBoard