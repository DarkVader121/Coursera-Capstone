import Footer from "../components/Footer";
const LoginStyle = { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
}
function Login () {
    return(
        <>
        <div style={LoginStyle}>
            <h1>Log-in Page</h1>
        </div>
        <Footer/>
        </>
    )
}

export default Login; 