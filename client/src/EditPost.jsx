import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/editpost/${id}`, {
        title,
        description,
      })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getpostbyid/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, [id]); // Added 'id' as a dependency to re-fetch data when 'id' changes.

  return (
    <div className="editpost_container">
      <div className="editpost">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <h2 >Update Post</h2>
          <input
            type="text"
            
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            id="desc"
            cols="30"
            rows="10"
            value={description}
            
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
