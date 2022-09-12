import React, {useState} from "react";
import Comments from "./Comments";

function CommentButton({comments}) {
    const [isHidden, setHidden] = useState(true)

    function toggleButton(event){
        setHidden(isHidden => !isHidden)
        console.log(event.target)
    }

  return (
    <div>
       <button onClick={toggleButton}>{isHidden ? "Hide Comments" : "Show Comments"}</button>
       <hr></hr>
       {isHidden ? <Comments comments={comments} /> : null}
    </div>
  );
}

export default CommentButton;
