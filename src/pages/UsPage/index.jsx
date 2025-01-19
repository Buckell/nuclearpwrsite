import UsPageContainer from "./UsPageContainer.jsx";
import {useNavigate} from "react-router-dom";
import cassiePic from "../../assets/cassie.png";
import maxPic from "../../assets/max.jpg";
import katherinePic from "../../assets/katherine.jpg";


export default function UsPage() {
    const navigate = useNavigate();

    return(
        <UsPageContainer>
            <nav>
                <div className="logo">NuclearPWR</div>
                <div className="nav-items">
                    <a onClick={() => navigate('/')}>Home</a>
                    <a onClick={() => navigate('/reactor')}>Simulator</a>
                    <a onClick={() => navigate('/about')}>Us</a>
                </div>
            </nav>
            <section className="Abouts">
                <div className="AboutsContainer">
                    <div className="column">
                        <img src={katherinePic} id="katherinePic"/>
                        <h1>Katherine Logue</h1>
                        <p>
                            Katherine Logue is a first year student at the Georgia Institute of Technology majoring in Computer Science and minoring in Earth and Atmospheric Sciences. Her primary research interest is the intersection of computing and conservation. After graduating, she plans to pursue a career in climate modeling.
                        </p>
                    </div>
                    <div className="column">
                        <img src={cassiePic} id="cassiePic"/>
                        <h1>Cassie Robinson</h1>
                        <p>
                            Cassie Robinson is a first year nuclear engineering minoring in chemistry. She is dedicated to improving varbon free energy for the world, but she is specifically interested in nuclear fuels reprocessing! She currently is doing slug flow research on lanthanide daughter nuclei in spent fuels!
                        </p>
                    </div>
                    <div className="column">
                        <img src={maxPic} id="maxPic"/>
                        <h1>Max Goddard</h1>
                        <p>
                            Max Goddard is a second-year nuclear engineering student at Georgia Tech. He works in the
                            Intelligence for Advanced Nuclear (iFAN) Laboratory and Radiological Science and Engineering
                            Laboratory (RSEL). He works on nuclear cybersecurity research and developing a nuclear
                            criticality safety curriculum with Oak Ridge National Laboratory, Texas A&M University, and
                            the Department of Energy.
                        </p>
                    </div>

                </div>
            </section>

        </UsPageContainer>
    );
};