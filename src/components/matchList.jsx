import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import moment from "moment";

class MatchDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.matchDetailsList &&
      this.props.matchDetailsList.length &&
      this.props.matchDetailsList.map((matchDetails, ind) => {
        return (
          <div className="matchListCardContainer" key={ind}>
            <div className="seriesName">{matchDetails.seriesName}</div>
            <div className="matchNum_venue fn_sz">
              {matchDetails.matchNumber} - {matchDetails.venue}
            </div>
            <div className="homeTeam fn_sz">
              <span>
                <i className="fa fa-globe"></i>
              </span>
              {matchDetails.homeTeamName}
            </div>
            <div className="awayTeam fn_sz">{matchDetails.awayTeamName}</div>
            {matchDetails.matchStatus === "upcoming" ? (
              <div align="center" className="tossUpdate fn_sz">
                Starts{" "}
                {moment
                  .unix(matchDetails.startDate)
                  .format("MMMM Do YY, h:mm:ss a")}
              </div>
            ) : matchDetails.matchStatus === "running" ? (
              <div align="center" className="tossUpdate fn_sz">
                {""}
              </div>
            ) : matchDetails.matchStatus === "completed" ? (
              <div align="center" className="tossUpdate fn_sz">
                {matchDetails.matchResult}
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })
    );
  }
}

export default withRouter(MatchDetails);
