import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from "./FormComponent";

class ModalForm extends React.Component {
   
  render() {
    let modalHeader = ''
    let modalBody = ''
    let goals1= ''
    let goals2= ''

  
    if (typeof this.props.match.team1 !== 'undefined') {
        goals1 = this.props.match.goals1.map((goal) => {
          return (
            <div>
                {goal.name} - {goal.minute}
            </div>  
          )
        })
        goals2 = this.props.match.goals2.map((goal) => {
            return (
              <div>
                  {goal.name} - {goal.minute}
              </div>  
            )
          })
        modalHeader = <ModalHeader>{ this.props.match.team1.name } - { this.props.match.team2.name } - { new Date(this.props.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
        modalBody = <ModalBody>
            { this.props.match.score1 } - { this.props.match.score2 }
            { goals1 } || {goals2}
            <Form/>
            
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