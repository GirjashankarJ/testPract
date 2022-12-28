import React, { useState } from "react";
import Mypost from "./Components/Mypost";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

// import MyButton from "../../Shared/Components/MyButton";
import Header from "../../Shared/Components/Header";
import { customGet, customPost } from "../../Utilitites/custom-fetch";

export default function PostListPract() {
  const [posts, setPosts] = useState([]);

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");

  function getAllPosts() {
    customGet(`http://localhost:3001/posts`).then((response) => {
      setPosts(response);
    });
  }

  function createPost() {
    let obj = {
      author: localStorage.getItem("usernameValue"),
      heading: heading,
      content: content,
    };

    customPost(`http://localhost:3001/posts`, obj).then((response) => {
      if (response.result == true) {
        // setPosts(response);        // this is not working here????
        alert("post created");
      }
    });
  }

  function deletePost() {
    if (heading && content) {
      customGet(`http://localhost:3001/create-post`).then((response) => {
        setPosts(response);
      });
    } else {
      alert("Fill details");
    }
  }

  return (
    <div>
      <Header></Header>
      <div>
        <TextField
          id="outlined-basic"
          label="heading"
          variant="outlined"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="content"
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button variant="contained" onClick={createPost}>
          Create Post
        </Button>

        <Button variant="contained" onClick={getAllPosts}>
          Get All Posts
        </Button>
        <Button variant="contained" onClick={deletePost}>
          Delete Post
        </Button>
      </div>
      {posts.map((item) => (
        <>
          <Mypost item={item} />
        </>
      ))}
    </div>
  );
}
