 import "./Navbar.css"
 import { Link } from "react-router-dom"
const Navbar=()=>{
    return  (
        <div className="nav">
            <p>Home page</p>
            <p>Login</p>
            <p>signup</p>
            <Link to={`/product/create`}> Add New Product</Link>
        </div>
    )
}

export default Navbar;