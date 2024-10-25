import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import mediaLanding from '../assets/mediaLanding.png'

function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <div style={{backgroundColor:"#E7D4B5"}}>
      <Row className="align-items-center justify-content-between w-100" >
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'50px' }}>
            <span style={{color:'black',fontWeight:"bolder"}}>Media-Player</span>
          </h1>
          <p className="text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quis deserunt quaerat aliquid nemo numquam distinctio ab corporis
            perspiciatis dolor non, nam, earum vero sapiente possimus ratione,
            quidem aspernatur libero?
          </p>
          <button onClick={() => navigateByUrl('/home')} className="btn btn-lg " style={{backgroundColor:"#A0937D", color:"white"}}>Get Satrted</button>
        </Col>
        <Col lg={5}>
          <img src={mediaLanding} width={500} style={{marginLeft:'150px'}} alt="" />
        </Col>
        <Col></Col>
        <hr className="text-light" />
      </Row>
      </div>

      <div className="container-fluid" style={{backgroundColor:'#E7D4B5',height:'800px'}}>
        <h3 style={{textAlign:'center',fontSize:'40px', color:"black"}}>Features</h3>
        <div className="cards d-flex justify-content-center w-100">
          <Card style={{ width: "22rem",margin:'40px',backgroundColor:"#A0937D"}} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://media.tenor.com/SZ0mKr1WKMsAAAAM/music-wave.gif" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-light">Play Everything</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif',color:"white"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem",margin:'40px',backgroundColor:"#A0937D" }} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://media.tenor.com/r7LADqyXxkcAAAAM/music.gif" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-light">Managing Videos</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif',color:"white"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card style={{ width: "22rem",margin:'40px',backgroundColor:"#A0937D" }} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://media.tenor.com/ZvCzj0qWiQ0AAAAM/radio-stereo.gif" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-light">Customized Videos</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif',color:"white"}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
<div  style={{backgroundColor:"#E7D4B5", padding:"10px"}}>
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-dark" style={{fontSize:'40px',marginBottom:'50px',fontFamily: 'Georgia, serif'}}>Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5',color:"black"}}>
            <span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut voluptatum repudiandae et sit reprehenderit.
            Dolorum, corrupti facilis commodi odit expedita aspernatur illo
            ducimus assumenda aliquid. Repellendus numquam blanditiis
            exercitationem porro.
          </h6>

          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5',color:"black"}}>
            <span className="text-warning fw-bolder">Categoried Videos</span>: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut voluptatum repudiandae et sit
            reprehenderit. Dolorum, corrupti facilis commodi odit expedita
            aspernatur illo ducimus assumenda aliquid. Repellendus numquam
            blanditiis exercitationem porro.
          </h6>

          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5',color:"black"}}>
            <span className="text-warning fw-bolder ">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut voluptatum repudiandae et sit reprehenderit.
            Dolorum, corrupti facilis commodi odit expedita aspernatur illo
            ducimus assumenda aliquid. Repellendus numquam blanditiis
            exercitationem porro.
          </h6>
        </div>
        <div className="col-lg-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44?si=fMHeAznrvyFXWU4b" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
          </div>
      </div>
      </div>

      
    </>
  );
}

export default Landingpage;
