import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class Resume extends Component {


  render() {
    return (

        <Row id="resume">
        <a name="aboutMe"></a>
          <Col xs={12} md={8} mdOffset={2}>
            <a name="resume"></a>
            <div id="resumeContents">
              <br/>
                <h4>Strong:</h4>
              <p>
                  Javascript, Express, Node, JQuery, MongoDB, HTML, CSS, Bootstrap, Rest APIs, Heroku, Application/Software Troubleshooting, Computer Diagnostics and Repair, Linux, Active Directory
              </p>
                <h4>Experienced:</h4>
              <p>
                  SQL, PostgreSQL, SQLite, mySQL, D3, Backbone, AngularJS, React, Socket.IO, OAuth, Network Diagnostics, Passport, Adobe CC Suite
              </p>
              <br />
                <h3>Software Engineering Projects:</h3>
                  <span className="resumeDetails"><h6>(some currently in development)</h6></span>
                  <ul>
                    <li>Plantr - <span className="resumeDetails">An interactive garden planning and creation application designed to assist gardeners with managing their crops. - <a href="https://organico-plantr.herokuapp.com/
                      ">https://organico-plantr.herokuapp.com/</a>
                      </span>
                    </li>
                    <li>Stackets - <span className="resumeDetails">A code snipping website intended to make saving and managing code snippets easier and more organized. - <a href="  https://stackets-orion.herokuapp.com/
                      ">  https://stackets-orion.herokuapp.com/</a></span></li>
                    <li>Thymer - <span className="resumeDetails">A recipe site designed to aid users in cooking meals by providing step by step instructions, timers, and voice guidance. - <a href=" https://orion-thyme.herokuapp.com/
                      "> https://orion-thyme.herokuapp.com/</a>
                      </span></li>
                    <li>MTGInv - <span className="resumeDetails">A Magic The Gathering website to manage card collections, wish lists, and current card prices. - <a href="https://mtginv.herokuapp.com/
                      ">https://mtginv.herokuapp.com/</a></span></li>
                  </ul>
              <br/>
                <h3>Work Experience:</h3>
                  <div id="innerWorkDiv">
                    <h6>Patterson Companies, Inc.</h6>
                      <ul>
                        <li>
                          Tier 1 Tech Support:
                          <ul><span className="resumeDetails">
                            <li>Resolved staff technical issues using a variety of software and techniques.</li>
                            <li>Kept a current log of issues, problems, and fixes on a per person basis.</li>
                            <li>Worked in a team environment, sharing information with the team as it became available.</li>
                          </span></ul>
                        </li>
                        <li>
                          Tier 2 Tech Support:
                          <ul><span className="resumeDetails">
                            <li>Created resolution documentation for known company wide issues.</li>
                            <li>Helped in the creation of new team policies and training material.</li>
                            <li>Provided technical support assistance for Tier 1 specialists.</li>
                          </span></ul>
                        </li>
                        <li>
                          Service Desk Team Lead:
                          <ul><span className="resumeDetails">
                            <li>Managed a team of 20, monitoring performance and verifying goals were being met.</li>
                            <li>Led team meetings, trainings, and discussions.</li>
                            <li>Conducted one on one reviews with team members. </li>
                          </span></ul>
                        </li>
                      </ul>
                  </div>
              <br/>
              <h3>Education:</h3>
                <ul>
                  <li>Hack Reactor - <span className="resumeDetails">Advanced Software Engineering Immersive Program</span></li>
                  <li>Lake Land College - <span className="resumeDetails">Computer Technician Certification & Commercial Art</span></li>
                </ul>
            </div>
          </Col>
        </Row>

    );
  }
}

export default Resume;
