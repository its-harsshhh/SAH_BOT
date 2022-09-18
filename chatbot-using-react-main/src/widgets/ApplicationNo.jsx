import React, { useState } from "react";
import Button from "@material-ui/core/Button";

//defination  of ApplicationNo widget
//all the mathod define in actionprovider and all states of widget are passed in props
//you can use all fuunction and state with the help of props
const ApplicationNo = (props) => {
  const [state, setstate] = useState({
    name: "",
    mailid: "",
    contactno: "",
    date: "",
    locality: "",
    landmark: "",
  });

  const ApplSubmit = (input) => {
    const message = props.actionProvider.createChatBotMessage(
      `application no of ${input.name}: ${input.name }${input.contactno}${
        input.date
      }`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const ApplicationFormValidation = (field) => {
    const message = props.actionProvider.createChatBotMessage(
      `enter ${field} for create application number`,
      {
        withAvatar: true,
      }
    );
    props.actionProvider.addMessageToBotState(message);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    console.log(state.name);

    if (state.name === "") {
      ApplicationFormValidation("name");
    } else {
      if (state.mailid === "") {
        ApplicationFormValidation("mailid");
      } else {
        if (state.contactno === "") {
          ApplicationFormValidation("contact no");
        } else {
          if (state.date === "") {
            state.date = "01";
          }
          if (state.locality === "") {
            ApplicationFormValidation("locality");
          } else {
            if (state.landmark === "") {
              ApplicationFormValidation("landmark");
            } else {
              const info = state;
              //calling mathod define in actionprovider
              ApplSubmit(info);
            }
          }
        }
      }
    }
  };

  const onchangeevent = (event) => {
    console.log(event.target.value);
    setstate((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <form>
        <label>Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={onchangeevent}
        />
        <br />
        <label>Mail Id: </label>
        <br />
        <input
          type="text"
          name="mailid"
          value={state.mailid}
          onChange={onchangeevent}
        />
        <br />
        <label>Contact Number: </label>
        <br />
        <input
          type="text"
          name="contactno"
          value={state.contactno}
          onChange={onchangeevent}
        />
        <br />
        <label>Date: </label>
        <br />
        <input
          type="text"
          name="date"
          value={state.date}
          onChange={onchangeevent}
        />
        <br />
        <label>Locality: </label>
        <br />
        <input
          type="text"
          name="locality"
          value={state.locality}
          onChange={onchangeevent}
        />
        <br />
        <label>Landmark: </label>
        <br />
        <input
          type="text"
          name="landmark"
          value={state.landmark}
          onChange={onchangeevent}
        />
        <br />
        <Button
          variant="outlined"
          color="primary"
          className="btn btn-primary my-3"
          onClick={onsubmit}
        >
          submit
        </Button>
      </form>
    </>
  );
};

export default ApplicationNo;
