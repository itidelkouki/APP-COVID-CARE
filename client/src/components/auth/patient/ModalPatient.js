import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';
import { loginPatient} from '../../../js/actions/authPatientActions';

const ModalPatient =()=>{
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    dispatch(loginPatient({ email, password }));
    history.push('/Dashboard_patient');
    setEmail('');
    setPassword('');
  };
  return (
   
    <div style={{ padding: '0 15px' }}>
    <Button color="warning"  onClick={toggle} >signin</Button>
  
  <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Login</ModalHeader>
    <ModalBody>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            value={email}
            name="email"
            id="email"
            placeholder="email"
            className="mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label for="password">Password</Label>
          <Input
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Password"
            className="mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            color="dark"
            style={{ marginTop: '2rem' }}
            block
            onClick={handleLogin}
          >
            Login
          </Button>
        </FormGroup>
      </Form>
    </ModalBody>
  </Modal>
</div>
);
};
export default ModalPatient ;