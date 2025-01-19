import HomePageContainer from "./HomePageContainer.jsx";
import dataCenter from '../../assets/dataCenterPic.jpg';
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>
            <nav>
                <div className="logo">NuclearPWR</div>
                <div className="nav-items">
                    <a onClick={() => navigate('/')}>Home</a>
                    <a onClick={() => navigate('/reactor')}>Simulator</a>
                    <a onClick={() => navigate('/about')}>Us</a>
                </div>
            </nav>
            <section className="Hero">
                <div className="Hero-Container">
                    <div className="columnLeft">
                        <h1>About Our Project!</h1>
                        <p>
                            This project focuses on decarbonizing the rapidly growing AI industry. The power demands of
                            data centers
                            are skyrocketing, leading to increased energy and water costs in surrounding areas.
                            Additionally, many
                            data centers still rely on carbon-emitting power sources. Our solution? Nuclear reactors.
                            These reactors are ideal as personal power sources for data centers. Our
                            project aims to optimize energy and fuel usage by enabling the nuclear reactor to follow the
                            fluctuating
                            power demands of data centers driven by AI workloads.  Our program enables a data center to input their nedded target power and our simulator will adjust the components of the reactor to meet these needs. This approach aligns perfectly with
                            the theme of decarbonization.
                        </p>
                    </div>
                    <div className="column-right">
                        <img src={dataCenter} alt="Data Center Image"/>
                    </div>
                </div>
            </section>
        </HomePageContainer>
    );
}
