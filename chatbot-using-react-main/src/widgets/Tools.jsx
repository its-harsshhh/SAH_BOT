import React from "react";
import Button from "@material-ui/core/Button";

//defination  of Tools widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const Tools = (props) => {
  return (
    <>
      <ul>
        <li>
          <Button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.ApplicationNumber}
          >
            Application No
          </Button>
        </li>
        <li>
          <Button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.SocialDrivesHandler}
          >
            SocialDrives
          </Button>
        </li>
        <li>
          <Button
            className="my-1"
            variant="outlined"
            color="primary"
            onClick={props.actionProvider.VolunteerHandler}
          >
            Volunteer
          </Button>
        </li>
        
      </ul>
    </>
  );
};
export default Tools;
