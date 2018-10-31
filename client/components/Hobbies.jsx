import React from 'react'
// import { Link } from 'react-router-dom'

class Hobbies extends React.Component {
  render () {
    return (
      <div className="hobbies">
        <h5 className="hobbies-h5">Hobbies</h5>
        <div className="row hobbies-images">
          <div className="golf">
            <h5 className="golf-h5">golf</h5>
          </div>
          <div className="running">
            <h5 className="running-h5">running</h5>
          </div>
          <div className="travel">
            <h5 className="travel-h5">travelling</h5>
          </div>
          <div className="snowboard">
            <h5 className="snowboard-h5">snowboarding</h5>
          </div>
        </div>
      </div>
    )
  }
}
export default Hobbies
