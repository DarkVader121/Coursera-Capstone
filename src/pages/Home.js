import RestaurantImage from "../Image Assets/restaurant.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import Specials from "../components/Specials";
import Footer from "../components/Footer";
const buttonStyle = {
    padding: '10px 20px',
    fontsize: '16px', 
    borderRadius: '5px',
    backgroundColor: '#f0cc00', 
    color: 'black',
    border: 'none',
    cursor: 'pointer', 
    fontFamily: 'Karla, sans-serif',
    fontWeight: 'bold',
    height: '50px',
    
    ':hover': {
        backgroundColor:'#45a049'
    }
    
};



function Home () {
    return ( 
    <>
        <div style={{marginLeft:"5%", marginRight:"5%"}}> 
            <div style={{ padding:"30px", width:"max", background:'#4c5e57'}}>
                <div className="row" style={{justifyContent:"center"}} >
                <div className="col-md-4 col-12" >
                  <img src={RestaurantImage} alt="food" style={{height:"300px", objectFit:"cover", width:"550px", borderRadius:'15px'}}/> 
                </div>
                <div className="col-md-7 col-12 " style={{marginLeft:"10px", marginTop:"15px"}} >
                    <h1 style={{color:'#f0cc00', fontFamily: 'Karla, sans-serif'}}>Little Lemon</h1>
                    <h3 style={{color:'#EDEFEE', fontFamily: 'Karla, sans-serif'}}>Chicago</h3>
                    <p style={{color:'white', fontFamily: 'Karla, sans-serif', marginBottom:"40px"}}>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. </p>
                    <button style={buttonStyle} >Click Me</button>
                </div>
                </div>
            </div>
            
            <div className="row" style={{justifyContent:"center", alignItems:"center", marginTop:"20px"}} >
                <div className="col-md-7 col-12">
                    <h1>This Week Specials! </h1>
                </div>
                <div className="col-md-2 col-12">
                     <button style={buttonStyle}> Online Menu</button>
                </div>
            </div>

            <Specials/>
            <Footer/>
         </div>
    </>
      
    )
}

export default Home; 