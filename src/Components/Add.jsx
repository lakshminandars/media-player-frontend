import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import {uploadVideoAPI} from '../../services/allAPI'


function Add({setUploadVideoResponse}) {
  const[uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })
console.log(uploadVideo);

  // getYoutubeLink
  const getYoutubeLink=(e)=>{
    const {value}=e.target
    if (value.includes("v=")){
      let vID=value.split("v=")[1].slice(0,11)
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})      
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }

  const handleAdd=async()=>{
    const {id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("Please enter Missing Fields")
    }else{
      // store video details to json server
      const result=await uploadVideoAPI(uploadVideo)

      if(result.status>=200 && result.status<=300){
        // success
        handleClose()
        // alert
        alert("Uploaded Successfully")
        // after getiing success response filed should be empty
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        setUploadVideoResponse(result.data)
      }else{
        console.log(result.message);
        
      }
  }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex align-items-center">
        <button onClick={handleShow} style={{backgroundColor:"#A0937D"}}  className="btn text-light fw-bold mt-4 btn-lg">Upload Video</button>

      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fw-bold'>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Video Id"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Video Id" onChange={(e)=>setUploadVideo({
              ...uploadVideo,id:e.target.value})} />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingTitle" label="Video Title">
            <Form.Control type="text" placeholder="Video Title" onChange={(e)=>setUploadVideo({...uploadVideo,caption:e.target.value})} />
          </FloatingLabel>
          <br />

          <FloatingLabel
            controlId="floatingInput"
            label="Image URL"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})} />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Video URL" className='mt-3'>
            <Form.Control type="text" placeholder="Video URL" onChange={getYoutubeLink} />
          </FloatingLabel>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
