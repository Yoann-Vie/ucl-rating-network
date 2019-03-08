import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from "./FormComponent";
import "./css/ModalComponent.css"; 

class ModalForm extends React.Component {
   
  render() {
    let modalHeader = ''
    let modalBody = ''
    let goals1= ''
    let goals2= ''
    let comments = ''
  
    if (typeof this.props.match.team1 !== 'undefined') {
        goals1 = this.props.match.goals1.map((goal, key) => {
          return (
            <div key={key}>
                <img className={'ballon'} src="/images/ballonFoot.png" alt="Photo profil"/> {goal.name} - {goal.minute + "'" }
            </div>  
          )
        })
        goals2 = this.props.match.goals2.map((goal, key) => {
            return (
              <div key={key}>
                 <img className={'ballon'} src="/images/ballonFoot.png" alt="Photo profil"/> {goal.name} - {goal.minute + "'" } 
              </div>  
            )
        })

        comments = this.props.match.comments.map((comment, key) => {
            return (
              <div key={key}>
                <img className={'photoprofil'} src={ comment.user.image  } alt="Photo profil"/> {comment.user.username} - {comment.comment} - { new Date(comment.date).toLocaleDateString("fr-FR") }
              </div>
            )
        })
        modalHeader = <ModalHeader>{ this.props.match.team1.name } - { this.props.match.team2.name } - { new Date(this.props.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
        modalBody = <ModalBody>
           <div className="main container"> 
                <div className="row" style={{textAlign: "center"}}>
                    <div className="col-4">
                        { goals1 } 
                    </div>
                    <div className="col-4">
                        { this.props.match.score1 } - { this.props.match.score2 }
                    </div>
                    <div className="col-4">
                        { goals2 } 
                    </div>
                </div>
            </div>
            <Form match={this.props.match} round={this.props.round} year={this.props.year}/>
            { comments }
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