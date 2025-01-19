import ReactorPageContainer from "./ReactorPageContainer.jsx";
import reactorImage from "../../assets/diagram.svg"
import {useEffect, useState} from 'react';

import {useNavigate} from "react-router-dom";
import axios from "axios";

// mr server
const url = "http://localhost:55555/";

export default function ReactorPage() {
    const [value, setValue] = useState("");

    const handleClick10 = () => {
        console.log("Input box clicked!");
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const [panel, setPanel] = useState('');

    const PANELS = {
        '': {
            title: '',
            stats: [],
        },
        'reactor': {
            title: 'Reactor',
            stats: [
                {
                    title: 'Temperature',
                    get: () => Math.round(data["core.temperature"]) + " K",
                },
                {
                    title: 'Reactivity',
                    get: () => Math.round(data["core.reactivity"] * 100) / 100 + " D/c",
                },
                {
                    title: 'Thermal Power',
                    get: () => Math.round(data["core.thermal"] || 0).toLocaleString() + " KWt",
                }
            ]
        },
        'control_rods': {
            title: 'Control Rods',
            stats: [
                {
                    title: 'Insertion',
                    get: () => data["controlrod.insertion"] * 100 + "%",
                },
            ]
        },
        'steam_generator': {
            title: 'Steam Generator',
            stats: [
                {
                    title: 'Level',
                    get: () => data["SG.level"] || "0",
                },
                {
                    title: 'Mass Flow Rate',
                    get: () => data["SG.massFlowRate"] || "0",
                },
                {
                    title: 'Temperature',
                    get: () => data["SG.temp"] || "0",
                },
                {
                    title: 'Steam Generated',
                    get: () => data["SG.steamGenerated"] || "0",
                },

            ]
        },
        'primary_pump': {
            title: 'Primary Pump',
            stats: [
                // {
                //     title: 'RPM',
                //     get: () => data["primarypump.rpm"],
                // },
                {
                    title: 'Flow Rate',
                    get: () => Math.round(data["primarypump.flowrate"]) + " L/s",
                },
                // {
                //     title: 'Current Power',
                //     get: () => data["primarypump.currentpower"],
                // },
            ]
        },
        'secondary_pump': {
            title: 'Secondary Pump',
            stats: [
                {
                    title: 'RPM',
                    get: () => data["secondary_pump.rpm"] || "0",
                },
                {
                    title: 'Flow Rate',
                    get: () => data["secondary_pump.flowRate"] || "0",
                },
                {
                    title: 'Current Power',
                    get: () => data["secondary_pump.currentPower"] || "0",
                },
            ]
        },
        'turbine': {
            title: 'Turbine',
            stats: [
                {
                    title: 'RPM',
                    get: () => data["turbine.rpm"] || "0",
                },
                {
                    title: 'Pressure',
                    get: () => data["turbine.pressure"] || "0",
                },
                {
                    title: 'Torque',
                    get: () => data["turbine.torque"] || "0",
                },
                {
                    title: 'Amperage',
                    get: () => data["turbine.amperage"] || "0",
                },
            ]
        },
        'generator': {
            title: 'Generator',
            stats: [
                {
                    title: 'Output',
                    get: () => Math.round(data["generator.powerout"] || 0).toLocaleString() + " kWe",
                },
            ]
        },
        'condenser': {
            title: 'Condenser',
            stats: [
                {
                    title: 'Level',
                    get: () => data["condenser.level"] || "0",
                },
                {
                    title: 'Temperature',
                    get: () => data["condenser.temperature"] || "0",
                },
            ]
        }

    }

    const doOpenPanel = (panel) => {
        return () => setPanel(panel);
    }

    const refreshStats = () => {
        axios({
            method: 'GET',
            url: url + 'stats/',
        })
            .then(res => {
                if (res.data) {
                    setData(res.data);
                }
            });
    }

    const sendTargetPower = (target) => {
        axios.post(url + 'con/', {
            target
        }).then(console.log);
    };

    useEffect(() => {
        const timeoutId = setInterval(refreshStats, 1000);
        return () => clearTimeout(timeoutId);
    }, [setData]);

    return (
        <ReactorPageContainer>
            <nav>
                <div className="logo">NuclearPWR</div>
                <div className="nav-items">
                    <a onClick={() => navigate('/')}>Home</a>
                    <a onClick={() => navigate('/reactor')}>Simulator</a>
                    <a onClick={() => navigate('/about')}>Us</a>
                </div>
            </nav>
            <div className="reactor">
                <img src={reactorImage} alt="Reactor Image"/>

                <div className="Buttons">
                    <button className="button1" onClick={doOpenPanel('reactor')}>Reactor</button>
                    <button className="button2" onClick={doOpenPanel('control_rods')}>Control Rods</button>
                    <button className="button3" onClick={doOpenPanel('steam_generator')}>Steam<br/>Generator
                    </button>
                    <button className="button4" onClick={doOpenPanel('primary_pump')}>Main Pump</button>
                    <button className="button5" onClick={doOpenPanel('secondary_pump')}>Secondary Pump</button>
                    <button className="button6" onClick={doOpenPanel('turbine')}>Turbine</button>
                    <button className="button7" onClick={doOpenPanel('generator')}>Generator</button>
                    <button className="button8" onClick={doOpenPanel('condenser')}>Condenser</button>
                </div>
                <div className="messageBox">
                    <h1 id="Title">{PANELS[panel].title}</h1>

                    {PANELS[panel].stats.map((stat) => (
                        <p key={stat.title}>
                            {stat.title}: {stat.get() || ''}
                        </p>
                    ))}
                </div>
                <div className="messageBox2">
                    <p id="p">CURRENT POWER (kW)</p>
                    <p id="p2">{Math.round(data.power || 0).toLocaleString()}</p>
                </div>
                <div className="messageBox3">
                    <p id="p">TARGET POWER (kW)</p>
                    <p
                        id="p2"
                        contentEditable
                        onFocus={(e) => {
                            const range = document.createRange();
                            const selection = window.getSelection();
                            range.selectNodeContents(e.target);
                            selection.removeAllRanges();
                            selection.addRange(range);
                        }}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();

                                const newPower = parseInt(e.currentTarget.innerHTML.replaceAll(',', ''));
                                sendTargetPower(newPower);
                                e.currentTarget.innerHTML = newPower.toLocaleString();
                            }
                        }}
                        onBlur={(e) => {
                            const newPower = parseInt(e.currentTarget.innerHTML.replaceAll(',', ''));
                            sendTargetPower(newPower);
                            e.currentTarget.innerHTML = newPower.toLocaleString();
                        }}
                    >
                        0
                    </p>
                </div>
            </div>
        </ReactorPageContainer>
    );
}