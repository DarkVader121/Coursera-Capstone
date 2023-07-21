import { useState } from "react";
import Footer from "../components/Footer";
import banner from "../Image Assets/Nice.png"
const Reservation =  ({
    reservation , handleSubmit
    }) =>{

    const [formData, setFormData] = useState({
        firstName : reservation.firstName,
        lastName : reservation.lastName,
        email: reservation.email,
        phone:reservation.phone,
        date:reservation.date,
        time: reservation.time, 
        guest:reservation.guest,
        occasion:reservation.occasion, 
    })

return(
    <div style={{marginLeft:"5%", marginRight:"5%"}}>
        <div className="row">
            <div className="col-md-6" > 
               <img src={banner} className="img-fluid" style={{ objectFit:"cover", height:"500px", minWidth:"100%"}}/>
            </div> 
        </div>

        <div className="row">
            <div className="col-md-8">
            <form style={{padding:"20px"}}>
                <div className="form-group row" style={{ marginTop:"5px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold" }}>
                        First Name: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, firstName: e.target.value })} value={formData.firstName} type="text" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}  />
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Last Name: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, lastName: e.target.value })} value={formData.lastName} type="text" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}/>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Email: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, email: e.target.value })} value={formData.email} type="email" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}/>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px", alignItems:"center"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Phone Number: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, phone: e.target.value })} value={formData.phone}type="tel" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}/>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Date: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, date: e.target.value })} value={formData.date} type="date" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}/>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Time: 
                    </label>
                    <div className="col-sm-10">
                        <select onChange={(e) => setFormData({...formData, time: e.target.value })} value={formData.time} className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }} >
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                        </select>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Guest: 
                    </label>
                    <div className="col-sm-10">
                        <input onChange={(e) => setFormData({...formData, guest: e.target.value })} value={formData.guest} type="number" min="1" max="10" placeholder="1" className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}/>
                    </div>
                </div>

                <div className="form-group row" style={{ marginTop:"15px"}} >
                    <label className="col-sm-2 col-form-label col-form-label-lg" style={{fontWeight:"bold"}}>
                        Occasion: 
                    </label>
                    <div className="col-sm-10">
                        <select onChange={(e) => setFormData({...formData, occasion: e.target.value })} value={formData.occasion} className="form-control form-control-lg" style={{border: "2px solid #f0cc00 " }}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                
               </form>
               <button className="btn btn-warning btn-lg" onClick={handleSubmit} style={{marginTop:"20px"}}>
                    Reserve Table
                </button>
            </div>
        </div>
        <Footer/>
            </div>
            
)
}

export default Reservation; 