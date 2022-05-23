import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const CardDetails = (props) => {
  let missionName = props.launch.mission_name;
  let details = props.launch.details ? props.launch.details : 'No Details';
  let upcoming =  props.upcoming;
  let launchSuccess = props.launch.launch_success;

  const [showResults, setShowResults] = useState(false)
  const onClick = () => {
    if (showResults) {
      setShowResults(false)
    } else {
      setShowResults(true)
    }
  }

  function upcomingLaunch() {
    if(upcoming) {
      return 'upcoming'
    } else {
      return launchSuccess ? 'Success': 'Failed'
    }
  }

  return (
    <div className="row mt-2">
      <div className="col">
        <div className="border rounded p-2">
          <div className="row">
            <div className="col">
              <h4>{ missionName }</h4>
            </div>
            <div className="col">
              <span className="">{ upcomingLaunch() }</span>
            </div>
          </div>
          { showResults ? <div>{ details }</div> : <div></div> }
          <div className="mt-3">
            <Button 
              type="submit"
              size="sm"
              onClick={onClick} 
            >
            { showResults ? 'Hide' : 'Show' }
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
