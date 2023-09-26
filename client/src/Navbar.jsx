import React from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "./App";
import "./style.css"

const Navbar = ({}) => {
  const user = useContext(userContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    axios.get('http://localhost:3001/logout')
    .then(res => {
      if(res.data === 'Success')
      navigate(0)
    }).catch(err => console.log(err))
  }
  return (
    
    <div className="navbar-header">
      <div>
        <h3 className="link"> Solongo's Blog </h3>
      </div>
      <div className="link">
        <Link to="/" className="link">Blogs</Link>
        {user?.username && (
          <>
            <Link to="/create" className="link">Create blog</Link>
          </>
        )}
        {/* <a href="">Contact</a> */}
      </div>
      {user?.username ? (
        <div>
          <input
            type="button"
            value="Logout"
            className="logout_btn"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div>
          <Link to="/register" className="link">
            <h5 className="link">Register&Login</h5>
          </Link>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
