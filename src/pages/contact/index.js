import React, { Component } from "react";
import { H1 } from "../../styled-components/Heading";
import "../../styles/main.scss";
class Contact extends Component {
  render() {
    return (
      <div className="contact app">
        <header className="home-header">
          <H1>Contact Us</H1>
          <p className="rbs_test">
            Whether you’re planning a relaxing pool side break or an action
            packed adventure holiday, getting the right travel insurance before
            you go away can help with issues from missing luggage to holiday
            sickness or injuries. If you don't have travel insurance, you could
            have to pay for any medical care you need or replace expensive items
            like phones or cameras that are lost or stolen.
          </p>
        </header>
      </div>
    );
  }
}

export default Contact;
