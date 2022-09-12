import React from "react";

function Comments({comments}) {
  return (
    <>
        <h2>{comments.length} Comments</h2>
       {comments.map(comment => {
        return (
            <div key={comment.id}>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
       })}
    </>
  );
}

export default Comments;
