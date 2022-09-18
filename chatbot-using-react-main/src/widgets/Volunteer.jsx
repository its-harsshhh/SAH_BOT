import React from "react";

const Volunteer = (props) => {
  return (
    <>
      <ol>
        {props.VolunteerState.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};
export default Volunteer;
