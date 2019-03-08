import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./css/FormComponent.css";
import fetchData from "../functions/fetchFunction"

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            rate: null,
        };

        this.handleSubmitComment = this.handleSubmitComment.bind(this)
        this.handleSubmitRate = this.handleSubmitRate.bind(this)
    }

    handleSubmitComment = (event) => {
        event.preventDefault()
        fetchData("POST", "match/comment", localStorage.getItem('token'), {
            "team1_key": this.props.match.team1.key,
            "team2_key": this.props.match.team2.key,
            "year": this.props.year,
            "round": this.props.round,
            "comment": this.state.comment
        }).then((updatedMatch) => {
            this.props.updateModalMatch(updatedMatch)
            this.setState({
                comment: ''
            })
        })
    }

    handleSubmitRate = (event) => {
        event.preventDefault()
        if (this.state.rate === null) {
            return false
        }
        fetchData("POST", "match/rate", localStorage.getItem('token'), {
            "team1_key": this.props.match.team1.key,
            "team2_key": this.props.match.team2.key,
            "year": this.props.year,
            "round": this.props.round,
            "rating": this.state.rate
        }).then((updatedMatch) => {
            this.props.updateModalMatch(updatedMatch)
            this.setState({
                rate: null
            })
        })
    }

    handleChangeComment = (value) => {
        this.setState({
            comment: value
        });
    }

    handleChangeRate = (value) => {
        this.setState({
            rate: value
        });
    }

    render() {
        let options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((optionValue, key) => {
            return <option key={key}>{optionValue}</option>
        })

        return (
            <div>
                <Form onSubmit={this.handleSubmitRate}>
                    <FormGroup>
                        <Label for="form_rating">Notation :</Label>
                        <Input type="select" name="select" id="form_rating" onChange={(event) => this.handleChangeRate(event.currentTarget.value)}>
                            { options }
                        </Input>
                    </FormGroup>
                    <Button className="submit">Rate</Button>
                </Form>
                <Form onSubmit={this.handleSubmitComment}>
                    <FormGroup>
                        <Label for="form_comment">Commentaires</Label>
                        <Input value={this.state.comment} type="textarea" name="text" id="form_comment" onChange={(event) => this.handleChangeComment(event.currentTarget.value)} />
                    </FormGroup>
                    <Button className="submit">Post</Button>
                </Form>
            </div>
        );
    }
}

export default FormComponent;