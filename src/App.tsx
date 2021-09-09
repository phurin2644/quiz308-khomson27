import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments } from './data/comments'
import Post from './component/Post';
import Comments from './component/Commentator';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">
      
      <Post />

        {/* comments section */}
        <div className="">
        
        {comments.map(elt => {return (
                <Comments username={elt.username} 
                          userImagePath={elt.userImagePath}  
                          commentText={elt.commentText} 
                          likeNum={elt.likeNum} 
                          replies={elt.replies}/>)
        })}

        </div>

      </div>
    </div>
  );
}

export default App;