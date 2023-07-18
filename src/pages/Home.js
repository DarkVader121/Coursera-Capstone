import RestaurantImage from "../Image Assets/restaurantfood.jpg"
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
        <div style={{marginBottom:'200px', maxWidth:'90%',marginRight:'5%',  paddingLeft:'23%', paddingRight:'23%', marginLeft:'5%', height:'300px', background:'#4c5e57',  display:'flex', justifyContent:'space-between' }} >
            <div style={{marginTop:'10px'}}> 
                <h1 style={{color:'#f0cc00', marginBottom:'5px',  fontFamily: 'Karla, sans-serif'}}>Little Lemon</h1>
                <h3 style={{color:'#EDEFEE', marginTop:'5px', fontFamily: 'Karla, sans-serif'}}>Chicago</h3>
                <p style={{color:'white', fontFamily: 'Karla, sans-serif'}}>We are a family owned <br/> Mediterranean restaurant,<br/> focused on traditional <br/>recipes served with a modern <br/> twist.  </p>
                <button style={buttonStyle} >Click Me</button>
            </div>
            <div style={{marginTop:'5%'}}> 
            <img src={RestaurantImage} alt="food" style={{height:'400px', width:'420px', borderRadius:'15px'}}/> 
            </div>
        </div>  

        <div style={{ paddingRight:'28%', paddingLeft: '28%' , display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <h1>This Week Specials! </h1>
            <button style={buttonStyle}> Online Menu</button>
        </div>
        <div className="container" style={{ paddingBottom: '5%', paddingRight:'10%', paddingLeft:'10%'}}>
            <div className="row">
                <Specials/> 
            </div> 
        </div>
        <Footer/>
     </>
    )
}

export default Home; 