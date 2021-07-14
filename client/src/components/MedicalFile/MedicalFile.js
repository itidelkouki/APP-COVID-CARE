import React, {Fragment, useEffect} from 'react';
import { Card, Button, CardTitle } from 'reactstrap';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCurrentFile, deletemedicalFile, editmedicalFile} from "../../js/actions/medicalFileAction";
import {getAuthPatient} from "../../js/actions/authPatientActions";
import EditModalPatient from "../auth/patient/EditModalPatient";



const CardMedicalFile = () => {
  const getFile = () => dispatch(getCurrentFile());
   const dispatch=useDispatch();
   useEffect(() => {
    getFile();
  }, []);
   const medicalfile = useSelector((state) => state.MedicalFileReducer.medicalfile);
   const user = useSelector((state) => state.authPatientReducer.user);
    
    const getPatient = ()=>dispatch(getAuthPatient());
    

    const delet = (id) => dispatch(deletemedicalFile(id));
    const edit = (id) => dispatch(editmedicalFile(id));


    return     (
        <div  style={{ display:'flex' ,alignItems:'center' }}>
            <Card   style={{ backgroundColor :'#dab4df', color:'violet', height:"400px", width:"50%", alignItems:'center',margin:'100px', fontFamily:'"Open Sans", sans-serif', fontSize:'2rem',textTransform:' uppercase', }} >
            <h1 style={{ color:'yellow', fontWeight:'bold'}}>Medical file  </h1>
            <br/>
          <CardTitle style={{ textColor:'violet'}}> weight :{medicalfile && medicalfile.weight}</CardTitle>
          <CardTitle tag="h5"> medicalHistory: {medicalfile && medicalfile.medicalHistory}</CardTitle>
          <CardTitle tag="h5">allergiesName : {medicalfile && medicalfile.allergiesName}</CardTitle>
          <CardTitle tag="h5">bloodType : {medicalfile && medicalfile.bloodType} </CardTitle>
          <br/>
            <div style={{display:'flex', margin:'10px', alignItems:'center', textAlign:'center'}}>
          <Button  color="warning"   onClick={()=>delet(medicalfile._id)} >Delete</Button>
          <Link to="/Appointment">
          <Button  color="warning"  >Appointement</Button>  
          </Link> 
          <Link to="/Dashboard_patient">
          <Button  color="warning"  >Back</Button> 
          </Link> 
          </div>

          
          
        </Card>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8NEBANDQ8PDxAPDw0NDw8NDQ4PFREWFhURFRMYHSggGBolGxUWITEhJSotMDouFx8zODMtNygtLisBCgoKDg0OFhAQFS0dHR0tLSstLSsrLS0rLSsrKy0rLS0tLSstKysrLS0rKy0tKy0rKysrLS0tKy0tLS0tLS0tK//AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBBQYCBwj/xABBEAACAQICBgYHBgUCBwAAAAAAAQIDEQQFBhIhMUFRMmFxgZGhBxNCUnKxwSIjgpKi0RQzYmNzo+EVQ2Sys8LS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwUEBv/EACsRAQACAgEDAgQHAQEAAAAAAAABAgMRBCExQRJxBSJRYSMyM0KBwfDRE//aAAwDAQACEQMRAD8A+4gAAADDdtu4Cms2w7er66lf4l8wLVOrGXRlGXwtMD2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0GmmIlDDKMXbXqKMrcY2bt5IDg0wOi0H24mb5UJec4fsB3IAAAAAAAAAAAAAAAAAAAAAAAAAAAAADmNO39zSX9x/wDawOKA2+jGPVDEJy2RnF02+V2mn4rzA7tYtAe1iUB6VeIHpVFzQHpMDIAAAAAAAAAAAAAAAAAAAAAAAByXpCrqMKF77Zz3dSX7gcR/GR5S8v3Ax/GR5S8gL2G0iqQSinJpblJJ277gXaWlz9qDfY7AXKWltJ71Uj3XXkBco6SUJbqkV8V4/MC9SzWMujJS7GmBYhmb5gTRzXsYE0c0jxXgwJY5hTfFoCaOJg90o+NgJE0+sChntd08PUmm4tatmtjV5JAcxQ0irL29b4kmBfo6US9qEH2NxAvUtJKT6UZx7LSQFylm9CXtpfEmgLVOtGXRlGXY0wJAAAAAAAAAADh/Sa9mFXXV+UAOFAAAAAAATtu2dgFinjqsd1Sa7ZNrwYFqnnldb3GXxL9gLdPSOXtQ74y+jAtUtIoPfrx7Vf5AW6Wdwe6ce92+YFunmfFPvTAp5vnmvTdDX1rtaybTtZ3A0ykwPSqsCSOIYEscUBPDGdYFyhm1SO6c1+JgbChpDVW9qXal9AOgy3Hxrx1lsa2Sjy/2AuAAAFDEZioTcLXta+3qub0wequ9vRTBNq72zDM4PemvMTgsTx7Qnhi4P2l37DOcdo8M5xXjw4z0k3l/DNJySVS7SulfV3srqVJiYcOQgAAAAAAAAAAAAAAA9Rm1ubXYwJY4qS5PtQEscYuKa7NoE0K8Xua79gEqYHpVGB7jXYHSaE1nKtUXD1V2uvWVvqB2QAABy2bz1cRUXPVf6F+x0+NG8cOtxY3ihXjXNpo2miSNcrNFZo02kGNlGdPVlKP2X0W1xKTRScbVvGuXSVOp/khGT8bXM5w1nwynBWfDy1QlvpKPXTnKL8HdeRnPHhlPGjw8PBUXuqVYfHGNReKa+RnPHnxLOeNPiUcsrfs1KM+pydN/qSXmZzitHhnOG8eEU8urLb6ubXOC9YvGNyk1mPDOazHhWkrbHdPk9jIQwAAAAAAAAAAAAAD3CpJbm18gJ4Yx8Un2bGBPDERfG3U9gHXaAx+8xD5QpLxlP9gOzAAAOS0o2YlPnSg+/Wmv2OrweuOfd2Ph/XHPu1XrbHs9L3elVxWaauyO18+CI9KPQ5/HYpyldtt24kelWaIY1ys0VmiSNcrNFZokjXKzRSaJI1ys0VnGkhiLbnbsKzRWcayswm1Zy1lymlNeDM5xRPhlOGJ8PLnSl0qNJ9cdak/0tLyM5wVZTx6vLwtB7vW0+xxqLwaT8zOeP9JZzxvpKOWWJ9GtB9VSM6b8roznDaGc4LQjlldbhFT/AMc4T8k7+RSaWjwpNLR4VqtGcOnGcPii4/MqojAAAAAAAAAAAHdejJbMU+uil3Kb+oHcAAAHF+kGcoSoTi7aynF91n9Tp8CelodX4bPS0ezk6dWUt7b7WdB03iuBq8Z0u4CABdjRp6U3zI1CPTDKqsj0wj0Q9rEMj0Qr/wCcPccV2lZxqzjSxxa5lZxyrOKUscSuZSaKTjSxrlZopONJGuVmis41injprYpyS5XdvApOOPoznFH0ZeIjLp06M+twjGT/ABRszOcFfoznBX6PLo4eXsTh/jqO3hJMznjx4ZTx48I5ZdTfRquPVUp7PGLfyM5wWZzgsjllVT2ZUqnw1En4Ssyk47R4UnHaPCCrgqsdsqdRLnqtx8dxXUqamFchAAAAAPoHozj9ziJc6yXhTi/qB2QAAByPpFh9zRlyqNeMf9j38CfmtDo/Dp+a0fZxVA6jrlcDVYvpdyAhAAAAAAAAAZU2uLI1CNQkjiJLrImkKzSEkcVzRScas400MUuZWcbOcaWNcpNFJokjXKzRWaJI1ys0VnGmp4prdJrsbRWaKTjSvGuXTUKn+SEZvxauZziifDOcMT4R1KVGatqqlLhOF9W/XFvd2WMrYPoxtx/o1VWm4ycXvTszzTGujyzGp1LyQgA+jejaNsJVfPEyf+lTX0A6wAAA5vT6F8Hf3asH819T2cGfxP4e74fOsv8ADgKB13aK4GpxXSYEQAAAAAAAAAAAAAMqTQ0jT3Gsys1hWaQkjXKzRWaJI1ys0VmiSNcrNFZokjXKzRSaI689Z36kjncmuruZyq+m6M87zAH030fRtgYv3qtV+EtX6AdKAAAaTTOF8DX/AKVCXhNHp4k6y1erhzrNX/eHzegdp3iuBqMR0n2gRgAAAAAAAAAAAAAAAAADKkyNI09KoR6UelNSldHM50atX2cn4hXV6+yLEY6nT2Sld+7Ha/8AY8Lnq3/Fk+jB/idvJAfYPR628sw0mknJ1pbN22vO3lYDowAADXaRU9bB4lf2aj8It/Q1wTrJX3bcedZa+75bhzvPoiuBp63Sl2sDwAAAAAAAAAAAAAAAAAAAACvi60opJOyle9t+y3HvOb8Qj8s+/wDTlfEo/JPv/TU1d5znMS0gPvWgsLZZguujGX5m39QN6AAAQ4ynrUqkPepzj4xaLUnVolak6tEvkOF3LsR9C+mZrgaapvfaB5AAAAAAAAAAAAAAAAAAAABVx+6Pa/oc/nx8tZc34lHy1n7tXV3nMclLS3AfoHROGrl+BjywlD/xxA2wAAAA+PqGrOcfdnKPhJo+irO4iX01Z3WJeK5KzSy3sDAAAAAAAAAAAAAAMAAFyEFwFwMXAr43or4vozxc79OPf/rwfEI/Dj3/AKlq6u85TjpIPY+wD9GZLDVwuGj7tCkvCCQFwAAAAfKMyhq4rEx5V6vnNv6newzvHX2fR4J3irP2hTxBq1aRgAAAABgAAuQguAuBi4C4C4GLjYXCC4GLkBcBcCHFdHvR5eZ+lLx87rhn+Grq7zkOK9rovsfyA/SuHjaEFyjFeQEgAAAA+Y6SR1cdiV/XF/mpQf1O3xZ3iq7/ABJ3hr/vLUYl8N7adkt72G70NK2AuBi4C4C42MXGwuEFwMXIC4C4GLgLg2xcbRs1hs2xrEGy4NsXCC4Edfovu+Z5+V1xWeblxvDb/eWtq7zjuInwsdZxj70ox8WkB+lQAAAAA4DS3BJ4yc9Zx1qdN2SXJxvd/CdfhT+F/LtcGd4v5aqpSjCnUcVt1JXk9sns5nrexyNyAuAuBi4C4NsXG0bNYbNsaxBsuDbFwguBi4C4GLgLkbDWGxjWG0bNYG2Lg281HsfYY5+uO3sx5HXFb2a+rvOM4S/kkb4jDR97E0I+NWKA/RoAAAAAcdplG1eEveopflnL/wCjp8GflmPu63w+fktH3czj5/dVPgl8j2ve5G4NsXCC4GLgLgYuAuRsY1hsNYbRtjWBs1gMXBsuQhi4C4C4GLgYuNhcjaGJPY+xlMnWlvZTL1pb2lSqnFcFtdF4XxuCX/WYZ+FaL+gH6HAAAAADkdPGovDybSuqsdrS9x/ue/gz+aHR+Hz+aPZwGb5nHVdKD1m9kmtyXI6DptHrDaNsawNmsBjWAXIQxcBcDFwFwMXCC5GxjWGw1gFxsYuQMXAXCGLgLgLkT1hE9YlVqHEcBvtBoXzHBL++n+WLl9APvwAAAAAV8bhqVWOpVp06sfcqwjUj4MmJmOyYmY7OTzPQ/LJbVQ9Q+Dw1SdFL8Cer5GteRkj9zavJy1/c5fGaEQX8nFzXViacKn6oatvA3rzbeYeivPt5hqMTopjYXcYUsQuHqKsdZ/hqavzNq8yk9+jevNxz36NTisPVpX9bRr0be1VpThDunbVfczeuWlu0t65qW7WQRqJ7U01zTui+2jNwMaw2FyBi4C4QxcBcBcDFyDZcIYuAuBi4C4C4GLgQ1TizGpcGY1OnS+jmF80wfVKrLwoVCEPu4AAAAwwKeMq2TA5LN8a1cDmK+ZyT3geqOdSXEDYUM/fMDzWjgq+2rh6EpP21BQqfnjZ+ZeuS1e0r1yXr2lSq6K4Kf8upiKD5KarQ79dOX6javKyR36t68zJHfq1+I0Lrq7pV8PW5Kop4eVv1JvwNq8yPMN686P3Q1WKyHGUrueGrNL2qWriIvr+7bfikbV5GOfLevJx28tZKok9V/Zl7kk4z/K9prFontLaLRPaWbkpLgYuAuQFwMXCC4GLgLgLkDFwguBdwWW+s+3NtR4RWxy678EcnJ0tPu4uSNXt7y7P0eZfTjmFOUY2cKdWSbcpNfZUeL/qKKPrIAAAAwwKOMp3QHMZllzlcDnsVk0uQGuq5XJcGBWnhZrmB4vNcwJIYua5gWaWayXFgXqGeNcQLcs1p1Vq1YU6sXvjVhGovBkxMx2TEzHZTq5Jl1Xb6n1L54epOkl+BPV8jWufJHlrXkZK+VCvoVTe2ji5L+nEU4z7taDjbwZrXlz5hvXm28w1mJ0Rx0LuMKWIXD1FaOtb4amr5XNo5VJ79G1eXSe/RqMXhatG/rqVajbe6tOcYfmtbzNa5K27S3rlpbtKvGae1NNc07ouuzcBcBcBcDAAAB0WBf3UPhRys357OPm/Ut7uv9HUb42T5Yep5zpmbJ9KAAAAADxKFwIKmFTArVcuT4AUq2UJ8AKFfI1yA12IyDqA1tfIXyA19bJpLgBTqZfJcGBC6U1zAKtNcwJqeYSXFgXKOcyXEC/Qz58wPFengq7vVw2HlJ76igqdT88bS8y8XtHaV65LV7SpVtE8FP+XUxFB8lNVoeE035mscm8fdtXl5I79WtxGhNdbaVfDV1ymp4eVv1J+KNq8uPMN68yPMNXisgxlK7nhqzS9qko11/ptvyNa56T5bV5GOfLWOaUtR/Zkt8JfZmu2L2msTE9m0TE9mSUgADoMtf3UO/wCbOZyP1Jcnkx+JLuvRpRvWxFThClCHfOTf/p5mLB9BAAAAAAAAAY1QPLpICKWGTAgqYFPgBVq5WnwAo18mT4Aa+vkK5Aa3EZB1Aa6vkbXAChVyqS4MCtPCTXMCP7a5ge4Yqa5gWaWaSXEC7QzxriBbnmtOqtWrCnWj7tWEakfBomJmOyYmY7KdXJMuq/8AK9S+eHqTpJfgvq+RpGe8eWteRkjyoV9CoP8Ak4tr+nEUozv+ODjbwZtHLnzDevMnzDW4nRLGwu4wpV1/Yqxv+Weqa15NJ79G1eXSe/RcyfK8S4ql/D4hTUnsnTcI7/flaPmeXPaLX3Dx8i0WvuH1PRHLP4TD6knGVWpN1KrjtipNJKKb4JJd93xMWDfpgZAAAAAAAAAAAADFgMOCA8SoJgQzwafACtUy5PgBTrZQnwAoV8jT4Aa7EZB1Aa2vkL5Aa+tk0lwApVMukuDAglRmuYBVZrmBLTx8lxYFujnElxA2uBzptraB1mVY1ysB0FGV0BKAAAAAAAAAAAAAAAAAAMOIHl0kBFLDJgQVMCnwAq1crT4AUa2TJ8ANdXyFcgNbiMg6gNdXyJrgBRqZTJcAJ8FgJJ7mB2mSYdqwHU0FsAlAAAAAAAAAAAAAAAAAAAAAAAYsBhwQHiVBMCGeDT4AVqmXJ8AKlXKU+AHmnlKT3AbPDYVRAuxQGQAAAAAAAAAAAAAAAAAAAAAAAAAAAYYHhgeUBJED0AAAf//Z" style={{ height:'300px',  width:'300px', borderRadius:'50%' }}/>   

        </div>
    )
}

export default CardMedicalFile ;
/*  <div style={{display:"flex",justifyContent:"space-around"}} >
          {/* <Button  color="warning"   onClick={()=>delet(medicalfile._id)} >delete</Button> */
          //<Link to="/Dashboard_patient" ><Button  color="warning" >Back to dashboard</Button></Link>
             
          //</div>
          //of ${user && user.name} ${user && user.lastName}`} 


          /*medicalfile == null ? (
      <Card body>
      <h1>You have not any medical File yet: Please go back to reply to questionnaire..</h1>
      <Link to='/Dashboard_patient' ><Button  color="warning" >Back </Button></Link>
    </Card>
) :*/