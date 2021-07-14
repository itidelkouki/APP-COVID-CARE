import React,{useState} from 'react';
import { Form,FormGroup ,Label,Input,Button } from 'reactstrap';
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
// import BookAppointment from "./BookAppointment";
import {createAppointment } from "../../js/actions/appointementAction";
//import {getAuthPatient } from "../../js/actions/authPatientActions";
// import ListRendezVous from "./ListRendezVous";
import "../auth/patient/Questionnaire.css";
const AddAppointment = () => {
 
    const [patientname,setPatientname]=useState("");
    const [date,setDate]=useState("");
    const [time,setTime]=useState("");
    const dispatch=useDispatch();
    // const history = useHistory();
    const addApp = () => {
  
    const newAppointment = { patientname, date };
      dispatch(createAppointment(newAppointment));
      // history.push("/ListRendezVous");
      setPatientname('');
      setDate('');
      setTime('');
    }
  return (
    <div className="container">
    <div class="contact-container"> 
 <Form>
<h5><strong> Book your appointment :date: !</strong>  </h5>  
<p>Before making an appointment see the list of appointments booked by other patients</p>
<Link to="/ListRdv"> <Button color="warning"  > seeapp </Button></Link>
        <FormGroup>
        <Label for="PatientName">PatientName</Label>
        <Input 
        value={patientname}
        onChange={e=>setPatientname(e.target.value)}
        type="text"
        name="patientname"
        placeholder="patientname " /> </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Date</Label>
        <Input
         type="date" 
          className="form-control" 
           name="date" 
         value={date}
           onChange={e=>setDate(e.target.value)} /> </FormGroup>
            <FormGroup>
        <Label for="examplePassword">Time</Label>
        <Input
         type="time" 
          className="form-control" 
           name="wakeup" 
         value={time}
           onChange={e=>setTime(e.target.value)} /> </FormGroup>
            <Button color="warning" onClick={addApp} > save </Button>
            <Link to ='/Appointment'><Button color="warning" >BookAppointment </Button></Link>
             </Form>
             {/* <ListRendezVous/> */}
</div></div>
    )}
export default AddAppointment ;