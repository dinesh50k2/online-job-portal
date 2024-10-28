import React from 'react';
import './home.css';
const home = ()=>{
    return(
        <div className ="home-container">
            <nav className="navbar">
                <h1 className = "navbar-title">Job portal</h1>
                <ul className="navbar-links">
                    <li> <a href="/">HOME</a></li>
                    <li> <a href="/login">LOGIN</a></li>
                    <li> <a href="/register">REGISTER</a></li>
                </ul>
            </nav>
            <div className="face-section">
                <h3>This Job Portal Welcomes You</h3>
                <p>A new job is like a blank book and you are the author</p>
                <div className="search-button">
                    <input type="text" placeholder="Best opportunities"/>
                    <button>Search</button>
                </div>
            </div>
            <section className="featured-jobs">
                <h2>Top Opportunities</h2>
                <div className="jobs">
                    <div className="job-title">
                        <h3>Full Stack Developer</h3>
                        <p>Amazon</p>
                        <p>Hyderabad</p>
                        <buttton className="apply">Apply Now</buttton>
                    </div>
                    <div className="job-title">
                        <h3>Software Developer</h3>
                        <p>Amazon</p>
                        <p>Mumbai</p>
                        <buttton className="apply">Apply Now</buttton>
                    </div>
                    <div className="job-title">
                        <h3>Software Engineer</h3>
                        <p>Google</p>
                        <p>Hyderabad</p>
                        <buttton className="apply">Apply Now</buttton>
                    </div>
                    <div className="job-title">
                        <h3>Software Architect</h3>
                        <p>Morgan Stanley</p>
                        <p>Delhi</p>
                        <buttton className="apply">Apply Now</buttton>
                    </div>
                </div>
            </section>
            '<footer className="footer">
                <p>All Rights Reserved</p>
                </footer>'
        </div>

    );
};
export default home;