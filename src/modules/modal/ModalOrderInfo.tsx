
import React from "react";
import { useState } from "react";
// reactstrap components
import { Button, Form, Modal, ModalBody, ModalFooter } from "reactstrap";

function ModalOrderInfo(price) {
    // price là giá sản phẩm được kéo về từ context

  const [modalOpen, setModalOpen] = useState(false);
  const [sizeChoosen, setSizeChoosen] = useState("S")
  return (
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Launch demo modal
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Product order
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
            <Form>
                <span>SIZE: </span>
                <Button onClick={() => {}}>S</Button>&nbsp;
                <Button onClick={() => {}}>M</Button>&nbsp;
                <Button onClick={() => {}}>L</Button>
                <br />

                <p className="underline">Size chart guide</p>
                <br />
                <span>Amount: </span>&nbsp;
                <input type="number" id="product-order-quantity" name="product-order-quantity" min="1" max="100" step="1" value="1"/>
                <br />
                <span>Price: {price}</span>
            </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Add to Cart
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalOrderInfo;










