import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {Card, CardImg,  CardBody,Input,FormGroup,Label,Form,CardTitle, CardSubtitle, Button} from 'reactstrap';
import { createFile } from "../../../js/actions/medicalFileAction";
import "./Questionnaire.css";


const AddMedicalFile = () => {
    const [weight,setWeight]=useState("")
    const [ medicalHistory,setMedicalHistory]=useState("")
    const [allergiesName,setAllergiesName]=useState("")
    const [bloodType,setBloodType]=useState("")
    const dispatch=useDispatch();

    
    const history = useHistory();
  
    const addd = () => {
      const newFile= { weight, medicalHistory, allergiesName, bloodType};
      dispatch(createFile(newFile));
    history.push("/medicalFile");
    setWeight('');
    setMedicalHistory('');
    setAllergiesName('');
    setBloodType('');
    };

   
  return (
    <div className="container">
    <div class="contact-container">
       {/* <div class="right-col"> */}
       <div className="component">
       
    <div>
    <h3>Our patient's medical file</h3>
   
    <Form>
      <FormGroup>
        <Label for="examplePassword">Weight</Label>
        <Input
        value={weight}
        onChange={e=>setWeight(e.target.value)}
          type="text"
          name="weight"
          id="exampleweight"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail"> MedicalHistory</Label>
        <Input
        value={ medicalHistory}
        onChange={e=>setMedicalHistory(e.target.value)}
          type="text"
          name="medicalHistory"
          id="examplemedicalHistory"
          placeholder="with a placeholder"
        />
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">AllergiesName</Label>
        <Input
        value={allergiesName}
        onChange={e=>setAllergiesName(e.target.value)}
          type="text"
          name="password"
          id="exampleallergiesName"
          placeholder="password placeholder"
        />
      </FormGroup>
      <FormGroup>
        <Label for="bloodType"> BloodType </Label>
        <Input
        value={ bloodType}
        onChange={e=>setBloodType(e.target.value)}
          type="text"
          name="password"
          id="examplebloodType"
          placeholder="with a placeholder"
        />
      </FormGroup>
      <Button color="warning" onClick={addd}>save</Button>
    </Form>
    
     </div></div>
     <div>
      <Card className="Questionnaire">
      <CardImg top width="30%" src="https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-medical-supplies-medical-record-image_1456372.jpg"  alt="imgdossie" />
      <CardBody>
        <CardTitle tag="h5">Already have a medicalFile</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Click down to verify your medicalFile </CardSubtitle>
        
        <Link to="/medicalFile" > <Button color="warning">View </Button></Link>
        </CardBody>
        
      </Card>
      </div>
     </div></div>
   
      // </div>
  );
};


export default AddMedicalFile ;


