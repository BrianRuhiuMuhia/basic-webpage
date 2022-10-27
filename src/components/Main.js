import "./styles/main.css"
import logo2 from  "./images/logo2.svg"
import data from "../data.js"
import Card from "./Card.js"
export default function Main()
{
    const cards=data.map((d)=>{
        return <Card name = {d.name} image={d.image} price={d.price}/>
    })
    console.log(cards)
    return(
        <main className="Main">
            <section className="main_image">
                <img src={logo2} alt="" className="logo-sec"></img>
            </section>
            <section>
                <div className="cards wrapper">
{
    cards
}
                </div>
            </section>
        </main>
    )
}