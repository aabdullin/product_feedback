
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
    const toProperCase = (str: string) => {
        return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
        }


    return (
        <>
            <div className="tags">
                <Button style={{ textTransform: 'none' }} className="button" variant="contained" onClick={() => clear()}> Clear </Button>
                {availableTags.map((tag) => {
                    return (
                        <Button style={{ textTransform: 'none' }} className="tag" variant="text" onClick={() => filter(tag)}>
                            {toProperCase(tag)}
                        </Button>
                    )
                })}
            </div>
        </>
    )
}

export default TagsBoard