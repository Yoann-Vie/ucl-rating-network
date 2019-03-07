import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from "./FormComponent";

class ModalForm extends React.Component {

   
  render() {
    return (
    
        <Modal isOpen={this.props.isOpen} className={this.props.className}>
          <ModalHeader >Nom du match</ModalHeader>
          <ModalBody>
           <Form/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>

    );
  }
}

export default ModalForm;