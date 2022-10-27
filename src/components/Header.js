import NavBar from "./headerComponents/NavBar"
import logo from "./images/logo.jpg"
import "./styles/header.css"
export default function Header()
{
    return(
        <header className="header">
<img src={logo} alt="" className="logo"></img>
<NavBar/>
        </header>
    )
}