import { Avatar, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { customPatch, customPost } from "../../../Utilitites/custom-fetch.js";

export default function Mypost({ item }) {
  const [likes, setLikes] = useState(item.likes);
  const [commentBox, setCommentBox] = useState("");
  const [comments, setComments] = useState(item.comments);

  function increaseLikes() {
    let obj = {
      username: localStorage.getItem("usernameValue"),
    };

    customPatch(`http://localhost:3001/posts/${item.id}/like`, obj).then(
      (response) => {
        setLikes(response.newLikes);
      }
    );
  }

  function addComment() {
    let obj = {
      username: localStorage.getItem("usernameValue"),
      commentText: commentBox,
    };

    customPost(`http://localhost:3001/posts/${item.id}/comments`, obj).then(
      (response) => {
        setComments(response.newComments);
      }
    );
  }

  return (
    <div className="post-item-container">
      <div className="avatar-icon-container">
        <Avatar>{item.author.charAt(0)}</Avatar>
      </div>
      <span> {item.author}</span>
      <h3>{item.heading}</h3>
      <p>{item.content}</p>

      <div>
        <div className="action-container">
          <TextField
            variant="outlined"
            label="Add a comment"
            value={commentBox}
            onChange={(e) => setCommentBox(e.target.value)}
          />

          <Button variant="contained" onClick={addComment}>
            comment
          </Button>
        </div>
        <div className="action-container">
          <div>
            <span onClick={increaseLikes}>
              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </span>
            <span>&nbsp;&nbsp;{likes}</span>

            {/* <ul>
              {item.likedUsers.map((x) =
                <li>{x}</li>
              ))}

            </ul> */}
          </div>
          <div>
            <span>
              <i class="fa fa-comment-o" aria-hidden="true"></i>
            </span>
            <span>&nbsp;&nbsp;{comments.length}</span>
            <ul>
              {comments.map((c) => (
                <li>
                  {c.commentText} - {c.username}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span onClick={increaseLikes}>
              <i class="fa fa-share-square-o" aria-hidden="true"></i>
            </span>
            <span>&nbsp;&nbsp;{item.likes}</span>
          </div>
        </div>
      </div>

      {/* https://fontawesome.com/v4/icon/thumbs-up */}
    </div>
  );
}
