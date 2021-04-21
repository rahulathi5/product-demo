import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ProductDetailsModal = (props) => {
  return (  <Modal isOpen={props.isOpen} toggle={props.toggle} >
    <ModalHeader toggle={props.toggle}>Product Details</ModalHeader>
    <ModalBody>
        <div className="container">
        <img src={require("../assets/fast-food.png").default} alt="product-img" style={{width:100}}/>
          <h5><b>{props?.data?.title}</b></h5> 
          <h5>Price: ₹{props?.data?.price}</h5>
          {[
            ...Array(props?.data?.rating)
          ].map((each, index) => (
            <img key={index} className="star-icon" src={require("../assets/star.png").default} alt="star"/>
          ))}
          <p>{props?.data?.description}</p> 
        </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Close</Button>{' '}
    </ModalFooter>
  </Modal> );
}
 
export default ProductDetailsModal;