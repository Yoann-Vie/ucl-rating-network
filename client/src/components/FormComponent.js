import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./css/FormComponent.css";
import fetchData from "../functions/fetchFunction"

class FormComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
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

    handleChange = (value) => {
        this.setState({
            comment: value
        });
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="form_rating">Notation :</Label>
                        <Input type="select" name="select" id="form_rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Input>
                    </FormGroup>
                    <Button className="submit">Rate</Button>
                </Form>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="form_comment">Commentaires</Label>
                        <Input value={this.state.comment} type="textarea" name="text" id="form_comment" onChange={(event) => this.handleChange(event.currentTarget.value)} />
                    </FormGroup>
                    <Button className="submit">Post</Button>
                </Form>
            </div>
        );
    }
}

export default FormComponent;