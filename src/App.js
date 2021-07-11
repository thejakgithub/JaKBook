import './App.css'
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Input from './Components/Input';
import Post from './Components/Post';
import Modal_Edit from './Components/Modal_Edit';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPosts, setEditingPosts] = useState(undefined);
  const [modalShow, setModalShow] = useState(false);

  function addPost(title) {

    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function updatePosts(title) {

    let newEditingposts = editingPosts;
    const newPosts = posts;

    if (newEditingposts) {
      newEditingposts.title = title;

      newPosts.forEach((thePost) => {
        if (thePost.id === newEditingposts.id) {
          thePost = newEditingposts;
        }
      });
    }

    setPosts(newPosts);
    setEditingPosts(undefined);

  }
  function deletePost(id) {
    const upatedPost = posts.filter((post) => post.id !== id);
    setPosts(upatedPost);
  }

  function editPost(id) {
    posts.forEach((post) => {
      if (post.id === id) {
        setEditingPosts(post);
      }
    });
    setModalShow(true);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
      <Input addPost={addPost} />
      {posts.map((post) => <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} editPost={editPost} />)}
      <Modal_Edit
        show={modalShow}
        onHide={() => setModalShow(false)}
        editingPosts={editingPosts}
        updatePosts={updatePosts}
      />
</div>
    </div>
  );
}

export default App;
