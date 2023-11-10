import Button from "../Button"
import Searchbox from "../Searchbox"
import  './Navbar.css'

export default ()=>{
    return <div className="navbar">
        <img src="logo.png" width={67} height={34}/>
        <Searchbox/>
        <Button>Give Feedack</Button>
    </div>
}