import Footer from "../components/Footer";
const aboutStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'yellow',
}

function About (){

    return(
        <>
        <div style={aboutStyle}> 
            <h1>About Page</h1>
        </div>
        <Footer/>
        </>
    )
}

export default About;