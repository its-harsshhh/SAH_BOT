import { createChatBotMessage } from "react-chatbot-kit";
import ApplicationNo from "./widgets/ApplicationNo";
import SocialDrives from "./widgets/SocialDrives";
import Volunteer from "./widgets/Volunteer";
import Tools from "./widgets/Tools";

const botName = "Sahridhaya ";
//congig for chatbot
const config = {
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [createChatBotMessage(`Hii, I am ${botName}.`)],
  state: {
    VolunteerState: [
      "Self Intitator",
      "Eager to Serve",
      "Nature Nourisher",
    ],
    ToolsState: [
      "Application number",
      "SocialDrives",
      "Volunteer",
    ],
  },
  //widgets declaration section which we use in our bot for display information
  widgets: [
    {
      widgetName: "ApplicationNo",
      widgetFunc: (props) => <ApplicationNo {...props} />,
      mapStateToProps: ["Application"],
    },
    {
      widgetName: "Volunteer",
      widgetFunc: (props) => <Volunteer {...props} />,
      mapStateToProps: ["VolunteerState"],
    },
    {
      widgetName: "SocialDrives",
      widgetFunc: (props) => <SocialDrives {...props} />,
    },
    {
      widgetName: "Tools",
      widgetFunc: (props) => <Tools {...props} />,
      mapStateToProps: ["ToolsState"],
    },
  ],
};

export default config;
