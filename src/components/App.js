import React from "react";

import video from "../data/video.js";
import Header from "./Header";
import Buttons from "./Buttons";
// import Comments from "./Comments";
import CommentButton from "./CommentButton";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
       width="919"
       height="525"
       src="https://www.youtube.com/embed/dQw4w9WgXcQ"
       frameBorder="0"
       allowFullScreen
       title="Thinking in React"
     />
      <Header title={video.title} views={video.views} createdAt={video.createdAt} />
      <Buttons downvotes={video.downvotes} upvotes={video.upvotes} />
      <CommentButton comments={video.comments} />
    </div>
  );
}

export default App;
