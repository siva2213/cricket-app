import api from "../axios";

const matchScheduleActions = {
  getMatchSchedule: payload => {
    return dispatch => {
      api({
        url: "/cricket",
        method: "POST",
        data: {
          query: `
          query getMatchSchedule{
            schedule(type: "${payload.type}", status:"${payload.status}", page:0) {
              matchID
              seriesName
              matchNumber
              venue
              homeTeamName
              awayTeamName
              startDate
              matchStatus
              matchResult
            }
          }
          `
        }
      })
        .then(resp => {
          dispatch({
            type: "SET_MATCH_DETAILS",
            value: resp.data.schedule
          });
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
};

export default matchScheduleActions;
