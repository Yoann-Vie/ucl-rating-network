import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class FormComponent extends React.Component {
  render() {
    return (
      <Form>      
        <FormGroup>
          <Label for="form_rating">Select</Label>
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
        <FormGroup>
          <Label for="form_comment">Commentaires</Label>
          <Input type="textarea" name="text" id="form_comment" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default FormComponent;