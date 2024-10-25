import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Navbar className="  text-light" style={{height:"50px",backgroundColor:"#A0937D"}}  >
        <Container>
          <Navbar.Brand href="" >
          <i class='fa-solid fa-play text-light me-2 fs-2'></i>
            <Link to={'/'} style={{textDecoration:"none",color:"black",fontWeight:"bolder"}}>
             
              <h6 className="fs-5 mt-2"> MEDIA PLAYER</h6>
            </Link> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
