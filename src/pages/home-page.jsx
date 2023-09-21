import React from "react";
import '../css/home.css';

const HomePage = () => {
    return (
        <div>
            <div className="home-container">
                <div className="box">
                    <h1 className="home-title">Infrasight Monitoring</h1>
                    <p className="home-description">Keep an eye on your servers in real-time</p>
                </div>
            </div>
            
            {/* Add a spacer or some content to create space */}
            <div className="spacer"></div>
            
            <div className="services-container">
                <div className="row">
                    <h1 className="service-title">
                        SERVICES WE PROVIDE
                    </h1>
                </div>
                <div id="total-box" className="row">
                    <div className="col">
                        <div className="box-service">
                            <a href="/list"><h2 className="service-subtitle">Cpu Usage</h2></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box-service">
                            <a href="/list"><h2 className="service-subtitle">Memory Usage</h2></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box-service">
                            <a href="/list"><h2 className="service-subtitle">Disk Usage</h2></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box-service">
                            <a href="/list"><h2 className="service-subtitle">Wlan Usage</h2></a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box-service">
                            <a href="/list"><h2 className="service-subtitle">CPU Usage</h2></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
