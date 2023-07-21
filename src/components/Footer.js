import footerLogo from "../Image Assets/Logo.svg"

const textStyle = {
    fontFamily: 'Karla, sans-serif', 
    color: '#333', 
    textDecoration: 'none',
    marginBottom:'0px',
    weight: 'light'
}
function Footer() {
    return(
        <div style={{ backgroundColor:"#edefee",marginTop:"20px",  padding:"20px", display: "flex", gap:'5%', alignItems:'center' }}>
            <img src={footerLogo} alt="FooterLogo" height="50px" width="200px"/>
            <p style={textStyle}>Thank you for visiting Little Lemon! We appreciate your support and interest in our content. 
            All rights are reserved by Little Lemon for the year 2023. We strive to provide you with delightful experiences and 
            look forward to continuing to bring you the best of our offerings. Stay tuned for more exciting updates and remember, 
            your satisfaction is our top priority. </p>
        </div>
    )
}

export default Footer; 