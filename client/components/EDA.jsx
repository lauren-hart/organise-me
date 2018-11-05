import React from 'react'

class EDA extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-6 eda">
          <h3 className="eda-h3">Enspiral Dev Academy</h3>
          <p className="eda-p">
        Enspiral is a full immersion style bootcamp apprenticeship, <br />
        where you learn to become a full stack web developer over 18 weeks. <br />
        The course teaches full stack web development using a range of technologies, <br />
        but there is a lot of emphasis on human skills in the workplace. <br />
        We were working closely in teams, doing daily pair programming, <br />
        researching and presenting technical topics, < br />
        learning about and putting into practice agile ways of working.
          </p>
        </div>
        <div className="col-md-6 women">
          <h3 className="eda-h3">Women in Tech</h3>
          <div className="women-p">
            <img className="eda-pic" src="./images/eda.png" />
            <p className="eda-link">
              <a className="a-eda" href="https://skills.org.nz/about/latest-news/general/reigniting-passion-in-the-work-place-with-tech/">Read More </a>
              about my journey into tech.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default EDA
