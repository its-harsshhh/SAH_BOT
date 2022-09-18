class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  //method for add message in our chatbot
  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };

  //simple greeting which return simple message
  Greeting = () => {
    const message = this.createChatBotMessage(`hii`, {
      withAvatar: true,
    });
    this.addMessageToBotState(message);
  };

  //use tools widget, return button and action doing
  Tools = () => {
    const message = this.createChatBotMessage(
      `we provides this much features`,
      {
        withAvatar: true,
        widget: "Tools",
      }
    );
    this.addMessageToBotState(message);
  };


  //for Application no widget , use of form and submission of event
  ApplicationNumber = () => {
    const message = this.createChatBotMessage(
      `Enter your information for generate application no.`,
      {
        withAvatar: true,
        widget: "ApplicationNo",
      }
    );
    this.addMessageToBotState(message);
  };

  //display list using help of states array
  VolunteerHandler = () => {
    const messages = this.createChatBotMessage(`Chance to serve Nation:`, {
      withAvatar: true,
      widget: "Volunteer",
    });

    this.addMessageToBotState(messages);
  };

  // display list using help of data array provided in widget
  SocialDrivesHandler = () => {
    const messages = this.createChatBotMessage(
      `Case Studies for Social Drives:`,
      { withAvatar: true, widget: "SocialDrives" }
    );
    this.addMessageToBotState(messages);
  };

  //default handler if you not found any mathes
  handleDefault = () => {
    const message = this.createChatBotMessage("How can I help?", {
      withAvatar: true,
      widget: "Tools",
    });
    this.addMessageToBotState(message);
  };
}

export default ActionProvider;
