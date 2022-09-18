class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse = (message) => {
    //convert message in lowercase wich passed by user
    const lowerCase = message.toLowerCase();

    //define your keyword in condition and return handler function whixh created in actionprovider

    if (
      lowerCase.includes("hi") ||
      lowerCase.includes("hii") ||
      lowerCase.includes("hiii") ||
      lowerCase.includes("hello") ||
      lowerCase.includes("hey") ||
      lowerCase.includes("hiiii") ||
      lowerCase.includes("..") ||
      lowerCase.includes("heyy")
    ) {
      return this.actionProvider.Greeting();
    }

    if (
      lowerCase.includes("feature") ||
      lowerCase.includes("what you provide") ||
      lowerCase.includes("provide") ||
      lowerCase.includes("services") ||
      lowerCase.includes("tools") ||
      lowerCase.includes("tool") ||
      lowerCase.includes("about") ||
      lowerCase.includes("help") ||
      lowerCase.includes("methods")
    ) {
      return this.actionProvider.Tools();
    }

  

    if (
      lowerCase.includes("application") ||
      lowerCase.includes("registration") ||
      lowerCase.includes("applicationno") ||
      lowerCase.includes("registration no") ||
      lowerCase.includes("registration id") ||
      lowerCase.includes("registration number") ||
      lowerCase.includes("application no") ||
      lowerCase.includes("application number")
    ) {
      return this.actionProvider.ApplicationNumber();
    }

    if (
      lowerCase.includes("social drives") ||
      lowerCase.includes("drives") ||
      lowerCase.includes("drive") ||
      lowerCase.includes("ongoing drive") ||
      lowerCase.includes("nature drive") ||
      lowerCase.includes("environment drive") ||
      lowerCase.includes("save your nature drive")
    ) {
      return this.actionProvider.SocialDrivesHandler();
    }

    if (
      lowerCase.includes("volunteer") ||
      lowerCase.includes("volunteering") ||
      lowerCase.includes("initiative") ||
      lowerCase.includes("initiator") ||
      lowerCase.includes("rakshak") ||
      lowerCase.includes("warrior") ||
      lowerCase.includes("nature warrior") ||
      lowerCase.includes("environment saver") ||
      lowerCase.includes("saver")
    ) {
      return this.actionProvider.VolunteerHandler();
    }

    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;
