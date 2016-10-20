import React from 'react';
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap';

const RegisterForm = () => (
  <form>
    <FormGroup>
      <InputGroup>
        <InputGroup.Addon>@</InputGroup.Addon>
        <FormControl type="text" placeholder="Email here" />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <InputGroup>
        <FormControl type="text" placeholder="Password" />
      </InputGroup>
    </FormGroup>
  </form>
);

export default RegisterForm;
