
import ProductFeedbackCard from "./ProductFeedback"
import { useProductFeedback } from './ProductFeedbackContext';
import { ItemType, items } from '../db';
import Button from '@mui/material/Button';
import '../css/TagsBoard.css';


interface TagsBoardProps {
    items: Array<ItemType>
};

function TagsBoard ({ items } : TagsBoardProps){
    const { filter, clear } = useProductFeedback();
    let availableTags: string[] = [];
    items.forEach(item => {
        if (availableTags.indexOf(item.tag) === -1) {
            availableTags.push(item.tag)
        }
    })


    return (
        <>
            <div className="tags">
                <Button variant="contained" onClick={() => clear()}> Clear </Button>
                {availableTags.map((tag) => {
                    return (
                        <Button variant="text" onClick={() => filter(tag)}>
                            {tag}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default TagsBoard