import Footer from "../components/Footer";

const menuStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:"yellow",
}

function Menu () {
    return(
        <>
        <div style={menuStyle}> 
            <h1>
                Menu Page
            </h1>
        </div>
        <Footer/>
        </>
    )
}

export default Menu;