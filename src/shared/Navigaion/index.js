import React from "react";
import {Navbar, Nav} from "react-bootstrap"


function Index() {


  return (
    <React.Fragment>
      <section>
          <div>
          <Navbar collapseOnSelect expand="lg" variant="dark">
    
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="text">
      <Nav.Link > <span>TRIPS</span></Nav.Link>
      <Nav.Link>
      <span> RECENTLY VIEWED</span>
      </Nav.Link>

      <Nav.Link>
      <span> BOOKINGS</span>
      </Nav.Link>

      <Nav.Link>
     <img src="./asset/img/user.png"  alt="user"/>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
      </section>
    </React.Fragment>
  );
}
export default Index;
