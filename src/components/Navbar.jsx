import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import Cart from '../Pages/Cart';
import { useCart } from './ContextReducer';
const Navbar = () => {

    let data = useCart();

    const [cartView, setCartView] = useState(false);
    const Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        Navigate("/login");
    }


  return (
    <div>    
        <nav className="navbar navbar-expand-lg navbar-dark" style={{background: '#2e1f7a'}}>
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fst-bold ms-3" to="/" style={{letterSpacing: '1px'}}>Food Delivery</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item fs-5 m-3">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {(localStorage.getItem("authToken")) ?
                            <li className="nav-item fs-5 m-3">
                                {/* <Link className="nav-link active" aria-current="page" to="/">My Orders</Link> */}
                            </li>
                            : ""
                        } 
                    </ul>
                    {(!localStorage.getItem("authToken")) ?
                        <div className="d-flex" >
                        
                            <Link className="btn bg-white mx-1" to="/createuser" style={{ color: '#2e1f7a' }}>Sign Up</Link>
                            <Link className="btn bg-white mx-1" to="/login" style={{ color: '#2e1f7a' }}>Sign In</Link>
                        </div>
                        : 
                        <>
                            <div className='btn bg-white mx-2' style={{ color: '#2e1f7a' }} onClick={() => setCartView(true)}>
                            My Cart {" "}
                            <Badge pill bg="danger" > {data.length} </Badge>
                            </div>
                            {cartView? <Modal onClose={() => setCartView(false)}><Cart /> </Modal> : null}
                            <div className='btn bg-white mx-2' style={{ color: 'red' }} onClick={handleLogout}>
                                Logout
                            </div>
                        </>
                    } 
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar