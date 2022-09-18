import React from "react";

const data = [
  "Swachh Bharat Abhiyaan",
  "NAMAMI GANGE",
  "CAMPA ACT",
  "GO GREEN",

];

//defination  of SoftwareDevelopment widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const SocialDrives = (props) => {
  return (
    <>
      <ol>
        {data.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ol>
    </>
  );
};

export default SocialDrives;
