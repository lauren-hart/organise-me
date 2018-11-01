import React from 'react'
// import { Link } from 'react-router-dom'

class Projects extends React.Component {
  render () {
    return (
      <div>

        <div className="project-heading">
          <h3 className="projects-h3">Projects</h3>
        </div>

        <div className="row projects">
          <div className="col-md-4">
            <div className="project">
              <h4 className="projects-h4">Buy My Kai</h4>
              <p className="p-project">Buy My Kai is a web app that connects
              people through the food we grow in our backyard. <br /><br />
               It was the final group project I worked on
               at EDA in a team of five. <br />< br />
               We completed a prototype and presented at Graduation. <br />< br />
               We are looking to continue with the project and hope to
               deploy very soon.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project">
              <h4 className="projects-h4">Punt Club</h4>
              <p className="p-project">
              Lunch Bunch was a project completed at EDA
              as part of PackHac 2018. <br /> <br />
              PackHac was a hackathon set up for ideas
              for web apps within the Pacific Island
              Community in Auckland
              (who are currently under represented). <br /> <br />
              Lunch Bunch is a way of getting kids excited
              about healthy school lunches and taking
              the stress away from busy parents.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="project">
              <h4 className="projects-h4">Lunchbunch</h4>
              <p className="p-project">
              This is a personal project I have been working on. <br />
                <br />
              The idea stems from a club I have with some friends
               where we go on an annual holiday using joint funds. <br />
                <br />
               I was managing a spreadsheet to track the club’s
               standings and wanted something to work on that
               would allow me to translate my excel skills onto
               the web and help me practice React/Redux and APIs. </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Projects
