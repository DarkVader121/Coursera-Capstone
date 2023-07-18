import Footer from "../components/Footer";
import chicken from "../Image Assets/chicken.jpg"
import { useState } from "react";
const inputDesign = {
    backgroundColor: '#f0cc00',
    color: 'black',
    border: '1px solid gray',
    borderRadius: '4px',
    padding: '8px',
    weight: 'bold',
 };

 const buttonStyle = {
    padding: '10px 20px',
    fontsize: '16px', 
    borderRadius: '5px',
    backgroundColor: '#f0cc00', 
    color: 'black',
    border: 'none',
    cursor: 'pointer', 
    margin: '10px',
    fontFamily: 'Karla, sans-serif',
    fontWeight: 'bold',
    height: '50px',
    ':hover': {
        backgroundColor:'#45a049'
    }
};

const notification = {
    position: "fixed", 
    top: "2px",
    right: "20px", 
    backgroundColor: "#f0cc00", 
    color:"black",
    fontWeight: "bold",
    padding:"10px", 
    borderRadius: '4px',
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
    width: '20%',
    height: '8%',
    
}

const closeButton = {
    marginLeft: '10px',
    backgroundColor: "transparent",
    border: "none", 
    fontSize: "16px", 
    cursor: "pointer",
}


function Reservation() {
    const [savedReservation, setSavedReservation] = useState([]);
    const [reservation, setReservation]  = useState ({firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    guest: '',
    occasion: '',
});

const [showNotif, setShowNotif] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSavedReservation([...savedReservation, reservation]);
    setReservation({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      date: '',
      time: '',
      guest: '',
      occasion: '',
    });
    setShowNotif(true); 
  };

    const handleOnchange = (e) => {
        setReservation({...reservation, firstName: e.target.value})
    };

    return (
      <>
      {/* {
        savedReservation.map((res) => (
            <p>{res.firstName} {res.lastName} {res.email}{res.phoneNumber} {res.date} {res.time}{res.guest}{res.occasion}</p>
        ))
      } */}



        <div style={{ paddingLeft: "3%", paddingRight: "3%",display: "flex", justifyContent: "center", alignItems: "center", }} >
            <div style={{ position: "relative", display: "inline-block"}} >
                <img src={chicken} alt="banner" style={{ border:"white", objectFit:"cover", filter: "brightness(100%)", height:"300px", width:"1600px", padding:"5px"}} />
                  
                    <h1 style={{ padding:"10px",opacity:"95%", background:"#f0cc00", position:"absolute", top:"30%", left:"30%", transform:"translate(-50%, -50%)",color:"white", textAlign:"center" , fontFamily:'Karla, sans-serif', fontWeight:"bolder"}} >
                        Reserve Table from Little Lemon
                    </h1>      
            </div>    
        </div>
            <form style={{display:"inline-block", justifyContent:"center", paddingLeft:"45%", paddingRight:"45%"}}>
                <label for="first-name">First Name</label><br/>
                <input type="text" style={inputDesign} value={reservation.firstName} onChange={handleOnchange} /><br/><br/>
                <label >Last Name</label><br/>
                <input type="text" id="last-name" name="last-name"style={inputDesign} value={reservation.lastName} onChange={(e) => setReservation({...reservation, lastName: e.target.value })} /><br/><br/>

                <label >Email</label><br/>
                <input type="email" id="email" name="email" style={inputDesign} value={reservation.email} onChange={(e) => setReservation({...reservation, email: e.target.value })}/><br/><br/>

                <label >Phone Number</label><br/>
                <input type="tel" id="phone" name="phone"style={inputDesign} value={reservation.phoneNumber} onChange={(e) => setReservation({...reservation, phoneNumber: e.target.value})} /><br/><br/>

                <label >Choose Date</label><br/>
                <input type="date" id="date" name="date"style={inputDesign} value={reservation.date} onChange={(e) => setReservation({...reservation, date: e.target.value})} /><br/><br/>

                <label>Choose Time</label><br/>
                <select id="time" name="time" style={inputDesign} value={reservation.time} onChange={(e) => setReservation({...reservation, time: e.target.value})}>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select><br/><br/>

                <label>Number of Guests</label><br/>
                <input type="number" id="guests" name="guests" min="1" max="10" placeholder="1"  style={inputDesign} value={reservation.guest} onChange={(e) => setReservation({...reservation, guest:e.target.value})}/><br/><br/>

                <label>Occasion</label><br/>
                <select id="occasion" name="occasion"  style={inputDesign} value={reservation.occasion} onChange={(e) => setReservation({...reservation, occasion:e.target.value})} >
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select><br/><br/>
             

                <button type="submit" onClick={handleSubmit} style={buttonStyle}>Submit</button>
            </form>
            {
        showNotif && (
            <div style={notification}>

                <span>Reservation saved successfully!</span>
                <button style={closeButton} onClick={() => setShowNotif(false)}>
                    &times;
                </button>
            </div>
                )
            }
            <Footer/>
      </>
    );
  }

export default Reservation; 