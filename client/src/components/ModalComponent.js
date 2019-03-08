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
    let color = ''
    let og = ''
    let brc = ''
    let p = ''
    let userRate = ''
    let alt = "Profile pic."

    if (typeof this.state.match.team1 !== 'undefined') {
        if (localStorage.getItem('token')) {
            userRate = this.state.match.ratings.map((rate) => {
                let user = localStorage.getItem('token').split('.')[1].replace('-', '+').replace('_', '/');
                user = JSON.parse(window.atob(user));
                if (rate.user.username === user.username.toLowerCase()) {
                    return <strong>{ rate.rate }</strong>
                }
            })
        }

        goals1 = this.state.match.goals1.map((goal, key) => {
            if (goal.owngoal) {
                color = "orange"
                p = ""
                og = "(OG)"
                brc = color
            }
            else if (goal.penalty) {
                color = "black"
                og = ""
                p = "(P)"
                brc = ""
            }
            else {
                color = "black"
                p = ""
                og = ""
                brc = ""
            }

            return (
                <div key={key}>
                    <img className={'ballon'} src="/images/ballonFoot.png" alt={alt} style={{borderRadius: 10, backgroundColor: brc}}/> <span style={{color: color}}>{goal.name} - {goal.minute + "'" } <span style={{fontWeight: "bold"}}>{p}</span>{og}</span>
                </div>
          )
        })
        goals2 = this.state.match.goals2.map((goal, key) => {
            if (goal.owngoal) {
                color = "orange"
                p = ""
                og = "(OG)"
                brc = color
            }
            else if (goal.penalty) {
                color = "black"
                og = ""
                p = "(P)"
                brc = ""
            }
            else {
                color = "black"
                p = ""
                og = ""
                brc = ""
            }

            return (
              <div key={key}>
                  <img className={'ballon'} src="/images/ballonFoot.png" alt={alt} style={{borderRadius: 10, backgroundColor: brc}}/> <span style={{color: color}}>{goal.name} - {goal.minute + "'" } <span style={{fontWeight: "bold"}}>{p}</span>{og}</span>
              </div>  
            )
          })
        comments = this.state.match.comments.map((comment, key) => {
            return (
              <div key={key} className={'row commentaire'}>
                  <img className={'photoprofil'} src={ comment.user.image  } alt="Photo profil"/>
                  <div className="username col-2" >{comment.user.username}</div>
                  <div className="comment col-8" >{comment.comment}</div>
                  <div className="date col-1" >{ new Date(comment.date).toLocaleDateString("fr-FR") }</div>
              </div>
            )
        })
        modalHeader = <ModalHeader>{ this.state.match.team1.name } - { this.state.match.team2.name } - { new Date(this.state.match.date).toLocaleDateString("fr-FR") }</ModalHeader>
        modalBody = <ModalBody>
           <div className="main container"> 
                <div className="main row" style={{textAlign: "center"}}>
                    <div className="col-4 dom">
                        { goals1 } 
                    </div>
                    <div className="col-4 score">
                        { this.state.match.score1 } - { this.state.match.score2 }
                    </div>
                    <div className="col-4 ext">
                        { goals2 } 
                    </div>
                </div>
            </div>
            <div className={'rate'}>
                <div className="row">
                    <div className="col-10">
                    <div> <img className={'star'} src="/images/star.png" /> Global : <strong>8</strong></div>
                    </div>
                    <div className="col-2">
                    <div> <img className={'star'} src="/images/star.png" /> My rate : { userRate }</div>
                    </div>
                </div>
            </div>
            <Form match={this.state.match} round={this.props.round} year={this.props.year} updateModalMatch={this.updateModalMatch}/>
             { comments }
        </ModalBody>
    }

    return (
        <Modal size="lg" isOpen={this.props.isOpen} className={this.props.className}>
          { modalHeader }
          { modalBody }
          <ModalFooter>
            <Button color="danger" onClick={this.props.onCancel}>Cancel</Button>
          </ModalFooter>
        </Modal>
    );
  }
}


export default ModalForm;