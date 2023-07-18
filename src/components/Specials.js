import image1 from "../Image Assets/greek salad.jpg"
import image2 from "../Image Assets/bruchetta.svg"
import image3 from "../Image Assets/lemon dessert.jpg"
import driver from "../Image Assets/driver.png"



function Specials () {
    return (
        <>
        <div className="col-md-4"> 
            <div className="card" style={{height:'500px', backgroundColor:'#edefee'}}>
                <img src={image1} className="img-fluid" alt="responsive" style={{height: '200px'}}/> 
                    <div style={{display:"flex", justifyContent:"space-between",  padding:"5%" }}>
                        <h4>Greek Salad</h4>
                        <h4 style={{color:'red'}}>$12.99</h4>
                    </div>
                    <div style={{justifyContent:"space-between",  padding:"5%" }}>
                        <p style={{marginBottom:"20%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec libero tempor tempus. </p>
                        <div style={{display:"flex", gap:"10px" }}>
                            <h5>Order for Delivery</h5> <img src={driver} alt="Driver" height="25px" width="25px"/>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-4"> 
            <div className="card" style={{height:'500px', backgroundColor:'#edefee'}} >
                <img src={image2} className="img-fluid" alt="responsive" style={{height: '200px'}}/>
                    <div style={{display:"flex", justifyContent:"space-between",  padding:"5%" }}>
                        <h4>Bruchetta</h4>
                        <h4 style={{color:'red'}}>$12.99</h4>
                    </div>
                    <div style={{justifyContent:"space-between",  padding:"5%" }}>
                        <p style={{marginBottom:"20%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec libero tempor tempus. </p>
                        <div style={{display:"flex", gap:"10px" }}>
                            <h5>Order for Delivery</h5> <img src={driver} alt="Driver" height="25px" width="25px"/>
                        </div>
                    </div>
            </div>
        </div>
        <div className="col-md-4"> 
            <div className="card" style={{height:'500px', backgroundColor:'#edefee'}}>
                <img src={image3} className="img-fluid" alt="responsive" style={{height: '200px'}}/> 
                    <div style={{display:"flex", justifyContent:"space-between",  padding:"5%" }}>
                        <h4>Lemon Dessert</h4>
                        <h4 style={{color:'red'}}>$12.99</h4>
                    </div>
                    <div style={{justifyContent:"space-between",  padding:"5%" }}>
                        <p style={{marginBottom:"20%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit nec libero tempor tempus. </p>
                        <div style={{display:"flex", gap:"10px" }}>
                            <h5>Order for Delivery</h5> <img src={driver} alt="Driver" height="25px" width="25px"/>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Specials; 