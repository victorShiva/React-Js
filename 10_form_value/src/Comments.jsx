import { useState } from "react";
import CommentsForm from "./CommentForm";
import "./Comment.css";
export default function Comment() {
  const [comments, setComments] = useState([
    {
      username: "@shiva",
      remark: "great job!",
      rating: 3,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h3>All Comments</h3>
        {comments.map((comment, idx) => {
          return (
            <div
              className='comment'
              key={idx}>
              <span>{comment.remark}</span>
              &nbsp;
              <span>(rating = {comment.rating})</span>
              <p>-{comment.username}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
