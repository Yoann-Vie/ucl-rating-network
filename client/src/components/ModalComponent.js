import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Form from "./FormComponent";
import "./css/ModalComponent.css"; 

class ModalForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            match: this.props.match
        }

        this.updateModalMatch = this.updateModalMatch.bind(this)
    }

    updateModalMatch(match) {
        this.setState({
            match: match
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            match: props.match
        })
    }
   
    render() {
        let modalHeader = ''
        let modalBody = ''
        let goals1= ''
        let goals2= ''
        let comments = ''

        if (typeof this.state.match.team1 !== 'undefined') {
            goals1 = this.state.match.goals1.map((goal, key) => {
              return (
                <div key={key}>
                    <img className={'ballon'} src="/images/ballonFoot.png" alt="Photo profil"/> {goal.name} - {goal.minute + "'" }
                </div>
              )
            })
            goals2 = this.state.match.goals2.map((goal, key) => {
                return (
                  <div key={key}>
                     <img className={'ballon'} src="/images/ballonFoot.png" alt="Photo profil"/> {goal.name} - {goal.minute + "'" }
                  </div>
                )
            })

            comments = this.state.match.comments.map((comment, key) => {
                return (
                  <div key={key}>
                    <img className={'photoprofil'} src={ comment.user.image  } alt="Photo profil"/> {comment.user.username} - {comment.comment} - { new Date(comment.date).toLocaleDateString("fr-FR") }
                  </div>
                )
            })
            modalHeader = <ModalHeader>{ this.state.match.team1.name } - { this.state.match.team2.name } - { new Date(this.state.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
            modalBody = <ModalBody>
               <div className="main container">
                    <div className="row" style={{textAlign: "center"}}>
                        <div className="col-4">
                            { goals1 }
                        </div>
                        <div className="col-4">
                            { this.state.match.score1 } - { this.state.match.score2 }
                        </div>
                        <div className="col-4">
                            { goals2 }
                        </div>
                    </div>
                </div>
                <Form match={this.state.match} round={this.props.round} year={this.props.year} updateModalMatch={this.updateModalMatch}/>
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