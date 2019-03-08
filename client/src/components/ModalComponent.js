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

    let alt = "Profile pic."
  
    if (typeof this.props.match.team1 !== 'undefined') {
        goals1 = this.props.match.goals1.map((goal) => {
          return (
            <div>
                <img className={'ballon'} src="/images/ballonFoot.png" alt={alt}/> {goal.name} - {goal.minute + "'" }
            </div>  
          )
        })
        goals2 = this.props.match.goals2.map((goal) => {
            return (
              <div>
                 <img className={'ballon'} src="/images/ballonFoot.png" alt={alt}/> {goal.name} - {goal.minute + "'" } 
              </div>  
            )
          })

          comments = this.props.match.comments.map((comment) => {
            return (
              <div className="row commentaire">
                <img className={'photoprofil'} src={ comment.user.image  } alt={alt}/> <div className="username col-1">{comment.user.username}</div> <div className="comment col-8">{comment.comment}</div> <div className="date col-1">{ new Date(comment.date).toLocaleDateString("fr-FR") }</div>
              </div>  
            )
          })
        modalHeader = <ModalHeader>{ this.props.match.team1.name } - { this.props.match.team2.name } - { new Date(this.props.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
        modalBody = <ModalBody>
            
           <div className="main container"> 
                <div className="row main">
                    <div className="col-4 dom">
                        { goals1 } 
                    </div>
                    
                    <div className="col-4 score">
                        { this.props.match.score1 } - { this.props.match.score2 }
                    </div> 
                    
                    <div className="col-4 ext">
                        { goals2 } 
                    </div>
                </div>
            </div>
           
            <Form/>

             { comments }
            
            
        </ModalBody>
         
        
    }

    return (
        <Modal size="lg" isOpen={this.props.isOpen} className={this.props.className}>
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