import one from "../assets/images/1.jpg"
import two from "../assets/images/2.jpg"
import three from "../assets/images/3.jpg"
import four from "../assets/images/4.jpg"
import five from "../assets/images/5.jpg"
import six from "../assets/images/6.jpg"
import seven from "../assets/images/7.jpg"
import eight from "../assets/images/8.jpg"

function Container() {
    return (
        <div>

            <div className="container">

                <div className="image__container">
                    <img src={one} alt=" audi "></img>
                    <h2>AUDI</h2>
                </div>

                <div className="image__container">
                    <img src={two} alt=" benz "></img>
                    <h2>BENZ</h2>
                </div>

                <div className="image__container">
                    <img src={three} alt=" bmw "></img>
                    <h2>BMW</h2>
                </div>

                <div className="image__container">
                    <img src={four} alt=" range rover "></img>
                    <h2>RANGE ROVER</h2>
                </div>

                <br></br>
                
                <div className="image__container">
                    <img src={five} alt=" xuv "></img>
                    <h2>MAHINDRA XUV</h2>
                </div>

                <div className="image__container">
                    <img src={six} alt=" kia"></img>
                    <h2> KIA SELTOS</h2>
                </div>

                <div className="image__container">
                    <img src={seven} alt=" vw "></img>
                    <h2>VOLKSWAGEN</h2>
                </div>

                <div className="image__container">
                    <img src={eight} alt=" swift "></img>
                    <h2>MARUTI SWIFT</h2>
                </div>

            </div>




        </div>
    )
}


export default Container