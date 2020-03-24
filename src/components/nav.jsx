import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Actions from "../actions";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMatchSchedule({
      type: "All",
      status: "upcoming",
      page: 0
    });
  }

  onHandleRouteChange = e => {
    this.props.getMatchSchedule({
      type: "All",
      status: e.target.pathname.slice(1),
      page: 0
    });
  };
  render() {
    return (
      <div className="cardContainer">
        <div className="scheduleType">
          <div className="nav-item">
            <NavLink
              to="/upcoming"
              onClick={this.onHandleRouteChange}
              activeClassName="activeEventType"
              className="nav-item-link"
            >
              UPCOMING
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/running"
              onClick={this.onHandleRouteChange}
              activeClassName="activeEventType"
              className="nav-item-link"
            >
              RUNNING
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink
              to="/completed"
              className="nav-item-link"
              onClick={this.onHandleRouteChange}
              activeClassName="activeEventType"
            >
              COMPLETED
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMatchSchedule: Actions.getMatchSchedule
};

export default connect(null, mapDispatchToProps)(Nav);
