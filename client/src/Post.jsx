import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "./App";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const user = useContext(userContext);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getpostbyid/" + id)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deletepost/" + id)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="posts_container">
      <div className="posts">
        <img
          src={`http://localhost:3001/Images/${post.file}`}
          alt=""
          
        />
        <h2 >
          {post.title}
        </h2>
        <p >{post.description}</p>
        <div className="posts_btn">
          {
            user.email === post.email ? <> <Link to={`/editpost/${post._id}`}>
            <button className="button">
              Edit
            </button>
          </Link>

          <button
            onClick={(e) => handleDelete(post._id)}
            className="button2"
          >
            Delete
          </button></> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Post;
