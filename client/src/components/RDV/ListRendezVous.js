import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {Link} from "react-router-dom";
import {Container,ListGroup,ListGroupItem,Button} from "reactstrap";
import{CSSTransition,TransitionGroup} from "react-transition-group";
import "./ListRendezVous.css";
import { getAppointment,deleteAppointment} from '../../js/actions/appointementAction';
const AppointmentList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAppointment())
    },[])
    const delettApp=(id)=>{
        console.log("id",id)
        dispatch(deleteAppointment(id))
    }
    const appointments = useSelector(state=> state.appointmentReducer.appointments);
    return (
        <div className="container">
        <div class="contact-container"> 
        <Container>
<ListGroup>
    <TransitionGroup className="Appointment_List">
            {
             appointments&&  appointments.map(appointment=>  < CSSTransition key={appointment.id} appointment={appointment}  >  
<ListGroupItem>
    <Button className="remove_btn"
    color="danger"
     size="sm"   onClick={()=>delettApp(appointment._id)} >&times; {appointment.date}  {appointment.time}   </Button>  
</ListGroupItem>
       </CSSTransition> )}
    </TransitionGroup>
</ListGroup>
        </Container>
        <div >
       <Link to ='/RendezVous'><Button color="warning" >Go Back </Button></Link></div>
        </div> </div>
    )
}
 export default  AppointmentList ;