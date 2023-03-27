import React from 'react'
import "../style.css/about.css";
const About = () => {
  return (
    <div name="about" className='about'>
        {/* Container */}
        <div className='container-about'>
            
            <div className="timeline">
            <h1 className='type'>Education</h1>
                <div className="outer">
                    <div className="card">
                        <div className="info">
                            <h3 className='title'>B.Tech In Computer Science</h3>
                            <small>2019 - 2023</small>
                            <p>From United College of Engineering and Research, Greater Noida</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <h3 className='title'>Intermediate</h3>
                            <small>2016 - 2018</small>
                            <p>From S.S. Memorial Senior Secondary Public School, Saifai</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="timeline">
            <h1 className='type'>Certifications</h1>
                <div className="outer">
                <div className="card">
                        <div className="info">
                            <h3 className='title'>Started To Learn DSA from Coding Ninjas </h3>
                            <small>2022</small>
                            <p>Start with hackerrank and Leetcode </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <h3 className='title'>Started To Learn Web Development From udemy</h3>
                            <small>2020</small>
                            <p>Started with HTML,CSS,Javascript, MongoDb,NodeJS, ReactJS</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <h3 className='title'>Started To Learn Programming </h3>
                            <small>2019</small>
                            <p>Start with C and C++</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About