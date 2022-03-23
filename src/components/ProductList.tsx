
import ProductFeedbackCard from "./ProductFeedback"
import { ItemType } from '../db';

interface ProductFeedbackListProps {
    items: Array<ItemType>
};

function ProductFeedbackList ({ items } : ProductFeedbackListProps){
    return (
        <>
            <div className="cards">
                {items.map((item, index) => {
                    return (
                        <div key={index}>
                            <ProductFeedbackCard name={item.name} upvotes={item.upvotes} comments={item.comments} description={item.description} tag={item.tag}></ProductFeedbackCard>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductFeedbackList