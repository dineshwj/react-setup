import React, { Component } from "react";
import { Link } from "react-router-dom";
import { H1 } from "./styled-components/Heading";
import { Button as DefaultButton } from "./styled-components/Button";
import { getMember } from "./actions/member";
import { connect } from "react-redux";
import "./styles/main.scss";
import { ThemeConnect } from "./ThemeConnect";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getMember());
  }
  render() {
    const { member } = this.props;
    return (
      <div className="container">
        <header className="app-header">
          <H1>Welcome to RBS Travel App</H1>
          <p>
            <strong>Name</strong>: {member.name}
          </p>
          <p>
            <strong>Email</strong>: {member.email}
          </p>
          <p className="rbs_test">
            Whether you’re planning a relaxing pool side break or an action
            packed adventure holiday, getting the right travel insurance before
            you go away can help with issues from missing luggage to holiday
            sickness or injuries. If you don't have travel insurance, you could
            have to pay for any medical care you need or replace expensive items
            like phones or cameras that are lost or stolen.
          </p>

          <Link to="/home">
            <DefaultButton className="home_button">Go Home</DefaultButton>
          </Link>

          <Link to="/contact">
            <DefaultButton className="contact_button">Go Contact</DefaultButton>
          </Link>
        </header>
      </div>
    );
  }
}

export default connect(state => ({
  member: state.member
}))(ThemeConnect(App));
