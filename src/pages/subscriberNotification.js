import React from "react";
import MainOne from "../components/subscriberNotification/mainOne";
import MainTwo from "../components/subscriberNotification/mainTwo";
import "./notifications.css";


const SubscriberNotification = () => (
  <>
    <section>
      
      <div className="main">
        <nav></nav>
        <MainOne />
        <MainTwo />
      </div>
    </section>
  </>)

export default SubscriberNotification;
