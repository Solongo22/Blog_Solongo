import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
    .then(posts => setPosts(posts.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <div className="home_container">
        {posts.map((post) => (
          <Link to={`post/${post._id}`} key={post._id}>
            <div className="home">
              <img
                src={`http://localhost:3001/Images/${post.file}`}
                alt=""
                
              />
              <div className="home_text">
                <h2>{post.title}</h2>
                <p >{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home
