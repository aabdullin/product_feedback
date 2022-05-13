import '../css/ProductList.css';
import { useHistory } from "react-router-dom";

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
                        <div key={index} className="card">
                            <ProductFeedbackCard id={item.id} name={item.name} upvotes={item.upvotes} comments={item.comments[0].comment} description={item.description} tag={item.tag}></ProductFeedbackCard>                            
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ProductFeedbackList