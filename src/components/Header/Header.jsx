import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../images/Logo.svg'
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)
  const  handleLogOut = () =>{
     logOut()
     .then(result=>{})
     .catch(error=>{console.log(error)})
  }
  return (
    <>
    <div>
      
      <div className="navbar bg-primary text-primary-content flex justify-between">
        <div className="ml-24">
          <img src={logo} alt="" />
        </div>
       <div className="mr-9">
       <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
        <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
        <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
        <Link to='/inventory' className="btn btn-ghost normal-case text-xl">inventory</Link>
        <Link to='/signUp' className="btn btn-ghost normal-case text-xl">SignUp</Link>
     {  user &&  <span>Welcome to {user.email}
          <button onClick={handleLogOut} className="bg-black p-2 rounded ml-2 px-4">SignOut</button>
     </span>
       }
       </div>
      </div>
    </div>
    </>
  );
};

export default Header;
