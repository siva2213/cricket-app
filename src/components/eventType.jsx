import React, { Component } from "react";

class EventType extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="matchType">
          <div
            className={
              this.props.selectedEventName === "All"
                ? `activeItem pointer`
                : "pointer"
            }
            onClick={this.props.onHandleEvent}
          >
            All
          </div>
          <div
            className={
              this.props.selectedEventName === "International"
                ? `activeItem pointer`
                : "pointer"
            }
            onClick={this.props.onHandleEvent}
          >
            International
          </div>
          <div
            className={
              this.props.selectedEventName === "Domestic"
                ? `activeItem pointer`
                : "pointer"
            }
            onClick={this.props.onHandleEvent}
          >
            Domestic
          </div>
        </div>
      </div>
    );
  }
}

export default EventType;
