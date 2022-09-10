 import "./Navbar.css"
 import { Link } from "react-router-dom"
const Navbar=()=>{
    return  (
        <div className="nav">
            <a>Home page</a>
            <a>Login</a>
            <a>signup</a>
            <Link to={`/product/create`}> Add New Product</Link>
        </div>
    )
}

export default Navbar;