import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalForm extends React.Component {
   
  render() {
    let modalHeader = ''
    let modalBody = ''
    if (typeof this.props.match.team1 !== 'undefined') {
        modalHeader = <ModalHeader>{ this.props.match.team1.name } - { this.props.match.team2.name } - { new Date(this.props.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
        modalBody = <ModalBody>
            { this.props.match.score1 } - { this.props.match.score2 }
        </ModalBody>
    }

    return (
        <Modal isOpen={this.props.isOpen} className={this.props.className}>
          { modalHeader }
          { modalBody }
          <ModalFooter>
            <Button color="secondary" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
  }
}

export default ModalForm;