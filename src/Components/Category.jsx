import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import VideoCard from "./Videocard";
import {
  addCategoryAPI,
  deleteCategoryAPI,
  getCategoryAPI,
  getVideoAPI,
  updateCategoryAPI,
} from "../../services/allAPI";
import { Col, Row } from "react-bootstrap";

function Category() {
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryAPI({ categoryName, allVideos: [] });
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose();
        setCategoryName("");
        getCategories();
      } else {
        alert(result.message);
      }
    } else {
      alert("Please enter a category name");
    }
  };

  const getCategories = async () => {
    const { data } = await getCategoryAPI();
    setAllCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  // console.log(allCategories)

  const removeCategory = async (id) => {
    await deleteCategoryAPI(id);
    getCategories();
  };

  const dragOver = (e) => {
    console.log('Videocard dragging over the category');
    e.preventDefault();
  }

  const videoDropped = async (e , categoryid) => {
    const VideoId = e.dataTransfer.getData('VideoId')
    // console.log('Video_Id: '+VideoId+' Video Dropped Category_Id: '+categoryid);
    const {data} = await getVideoAPI(VideoId);
    // console.log(data)
    const selectedCategory = allCategories.find(item=>item.id===categoryid)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory)
    await updateCategoryAPI(categoryid,selectedCategory)
    getCategories();
  }

  const videoDragStarted = (e,videoId,categoryId) => {
  let datashare = {videoId,categoryId}
  e.dataTransfer.setData('data',JSON.stringify(datashare));
  }

  return (
    <>
      <div className="d-flex justify-content-between " style={{marginTop:'15px'}}>
      <div className="d-grid">
        <button onClick={handleShow} className='btn text-light ' style={{width:"350px",marginTop:"75px",backgroundColor:"#A0937D"}}>Add Category</button>
</div>
      </div>

      {allCategories?.length > 0 ? (
        allCategories.map((category) => (
          <div className=" shadow border rounded mt-4  mb-2" droppable='true' onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)}>
            <div className="d-flex justify-content-between align-items-center m-4">
              <h5 className="text-dark fw-bold">{category.categoryName}</h5>
              <Button variant="danger" onClick={() => removeCategory(category.id)}>
                          <i className="fa-solid fa-trash  " style={{fontSize:"15px"}}></i>
                        </Button>
            </div>
            <Row>
              {
                category.allVideos?.length>0?category.allVideos.map(card=>(
                  <Col className="d-flex justify-content-center mb-3" draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                    <VideoCard video={card} insideCategory={true}/>
                  </Col>
                )):null
              }
            </Row>
          </div>
        ))
      ) : (
        <p className="ms-2 text-dark mt-2">Nothing to display</p>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
       
      >
        <Modal.Header  closeButton>
          <Modal.Title  className="text-dark">Category</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <FloatingLabel
              controlId="floatingName"
              label="Category Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter Category Name"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body >
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAdd}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Category;
