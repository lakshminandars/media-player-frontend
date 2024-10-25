import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <MDBFooter
        className="text-center text-white  " style={{backgroundColor:"#A0937D"}}
      >
        <MDBContainer className="pt-2">
          <section className="mb-2">
            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fab fa-facebook-f text-light" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-twitter text-light" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-google text-light" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-instagram text-light" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-linkedin text-light" />
            </MDBBtn>

            <MDBBtn
              rippleColor="dark"
              color="link"
              floating
              size="lg"
              className="text-dark m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab className="fa-github text-light" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center text-light p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-light" href="https://MediaPlayer.com/">
            MediaPlayer.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
