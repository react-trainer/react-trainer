import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import lessonsSubRoutes from "../../routes/lessonsSubRoutes";

class LessonsDisplayed extends Component {
  constructor() {
    super();
    this.state = { redirect: false };
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  componentDidMount() {
    this.setRedirect();
  }
  render() {
    const { redirect } = this.state;
    return (
      <div>
        {lessonsSubRoutes}
        {redirect ? <Redirect to="/dashboard/lessons/all" /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(LessonsDisplayed);
