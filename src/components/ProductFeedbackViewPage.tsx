import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useProductFeedback } from "./ProductFeedbackContext";
import ProductFeedbackCard from "./ProductFeedback";


function ProductFeedbackViewPage() {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const { items, addComment } = useProductFeedback();
  const [comments, setComments] = useState('')
  const item = items.find(i => i.id === Number(params.id));

  useEffect(() => {
    setComments('');
  }, [items]);

  console.log(item);
  if (item === undefined) {
    history.push("/");
    return null;
  }

  return (
    <>
      <div className="card">
          <ProductFeedbackCard id={item.id} name={item.name} upvotes={item.upvotes} comments={item.comments[0].comment} description={item.description} tag={item.tag}></ProductFeedbackCard>
      </div>
      <div style={{
        border: '1px solid #036',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
      }}>
        {item.comments.map(comment => (
          <div>
            {comment.author.name}<br />
            {comment.author.username}<br />
            {comment.comment}
          </div>
        ))}
      </div>
      <div style={{
        border: '1px solid #036',
        borderRadius: '5px',
        margin: '10px',
        padding: '10px',
      }}>
        <textarea rows={5} cols={100} value={comments} onChange={(e) => { setComments(e.target.value) }}>
        </textarea>
        <br />
        <button onClick={() => { 
          // setComments((prevState) => {
          //   // 
          //   return ''
          // });
          addComment(item.id, comments);
        }} >Submit</button>
      </div>
    </>
  );
}

export default ProductFeedbackViewPage;
