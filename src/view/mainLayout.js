import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../actions";
import EventType from "../components/eventType";
import MatchDetails from "../components/matchList";
import { withRouter } from "react-router";

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEventName: "All"
    };
  }

  onHandleEvent = e => {
    this.setState({
      selectedEventName: e.target.innerHTML
    });
    let payload = {
      type: e.target.innerHTML,
      status: this.props.location.pathname.slice(1),
      page: 0
    };
    this.props.getMatchSchedule(payload);
  };
  render() {
    return (
      <>
        <EventType
          onHandleEvent={this.onHandleEvent}
          selectedEventName={this.state.selectedEventName}
        />
        {this.props.matchDetailsList && this.props.matchDetailsList.length ? (
          <MatchDetails matchDetailsList={this.props.matchDetailsList} />
        ) : (
          <div align="center" style={{ padding: "1rem" }}>
            There is no matches found
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    matchDetailsList: store.matchDetails
  };
};
const mapDispatchToProps = {
  getMatchSchedule: Actions.getMatchSchedule
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainLayout));
