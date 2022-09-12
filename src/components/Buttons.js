import React, {useState} from "react";

function Buttons({downvotes, upvotes}) {

    const [upvote, setUpvotes] = useState(upvotes)
    const [downvote, setDownvotes] = useState(downvotes)
      
  return (
    <div>
        <button onClick={() => {setUpvotes(upvote + 1)}}>{upvote} 👍</button>
        <button onClick={() => {setDownvotes(downvote - 1)}}>{downvote} 👎</button>
    </div>
  );
}

export default Buttons;
