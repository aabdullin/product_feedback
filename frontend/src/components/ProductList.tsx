import "../css/ProductList.css";

import ProductFeedbackCard from "./ProductFeedback";
import { ItemType } from "../db";

interface ProductFeedbackListProps {
  items: Array<ItemType>;
}

function ProductFeedbackList({ items }: ProductFeedbackListProps) {
  return (
    <>
      <div className="cards">
        {items.map((item, index) => {
          const comments = item?.comments || [];
          return (
            <div key={index} className="card">
              <ProductFeedbackCard
                id={item.id}
                name={item.name}
                upvotes={item.upvotes}
                comments={comments.length > 0 ? comments[0].comment : ""}
                description={item.description}
                tag={item.tag}
              ></ProductFeedbackCard>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductFeedbackList;
