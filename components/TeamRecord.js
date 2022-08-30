import TeamRecordBody from './TeamRecordBody';
import fixDecimals from '../helpers/fix-decimals';

function TeamRecord(props) {
  // Determine the home record for the 2021-2022 regular season
  const homeRecord = () => {
    let homeWins = 0;
    let homeLosses = 0;
    // Add wins and losses for games in which the team is home
    props.games.forEach((game) => {
      if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score > game.visitor_team_score
      ) {
        homeWins += 1;
      } else if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score < game.visitor_team_score
      ) {
        homeLosses += 1;
      }
    });

    return {
      homeWins: homeWins,
      homeLosses: homeLosses,
    };
  };

  // Determine the visitor record for the 2021-2022 regular season
  const visitorRecord = () => {
    let visitorWins = 0;
    let visitorLosses = 0;
    // Add wins and losses for games in which the team is the visitor
    props.games.forEach((game) => {
      if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score > game.home_team_score
      ) {
        visitorWins += 1;
      } else if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score < game.home_team_score
      ) {
        visitorLosses += 1;
      }
    });

    return {
      visitorWins: visitorWins,
      visitorLosses: visitorLosses,
    };
  };

  // Determine the division record for the 2021-2022 regular season
  const divisionRecord = () => {
    let divisionWins = 0;
    let divisionLosses = 0;
    let firstGame = props.games[0];
    let teamDivision;

    // Determine the team's division
    if (firstGame.home_team.full_name === props.teamName) {
      teamDivision = firstGame.home_team.division;
    } else if (firstGame.visitor_team.full_name === props.teamName) {
      teamDivision = firstGame.visitor_team.division;
    }

    // Store only the division games
    const divisionGames = props.games.filter(
      (game) =>
        game.home_team.division === teamDivision &&
        game.visitor_team.division === teamDivision
    );

    // Determine how many of the divisionGames were wins and losses
    divisionGames.forEach((game) => {
      if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score > game.visitor_team_score
      ) {
        divisionWins += 1;
      } else if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score > game.home_team_score
      ) {
        divisionWins += 1;
      } else {
        divisionLosses += 1;
      }
    });

    return {
      divisionWins: divisionWins,
      divisionLosses: divisionLosses,
    };
  };

  // Determine the conference record for the 2021-2022 regular season
  const conferenceRecord = () => {
    let conferenceWins = 0;
    let conferenceLosses = 0;
    let firstGame = props.games[0];
    let teamConference;

    // Determine the team's conference
    if (firstGame.home_team.full_name === props.teamName) {
      teamConference = firstGame.home_team.conference;
    } else if (firstGame.visitor_team.full_name === props.teamName) {
      teamConference = firstGame.visitor_team.conference;
    }

    // Store only the conference games
    const conferenceGames = props.games.filter(
      (game) =>
        game.home_team.conference === teamConference &&
        game.visitor_team.conference === teamConference
    );

    // Determine how many of the conferenceGames were wins and losses
    conferenceGames.forEach((game) => {
      if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score > game.visitor_team_score
      ) {
        conferenceWins += 1;
      } else if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score > game.home_team_score
      ) {
        conferenceWins += 1;
      } else {
        conferenceLosses += 1;
      }
    });

    return {
      conferenceWins: conferenceWins,
      conferenceLosses: conferenceLosses,
    };
  };

  // Determine the overall record & win percentage for the 2021-2022 regular season
  const overallRecord = () => {
    // Store return value in home variable and then access applicable property/values
    const home = homeRecord();
    const homeWins = home.homeWins;
    const homeLosses = home.homeLosses;

    // Store return value in visitor variable and then access applicable property/values
    const visitor = visitorRecord();
    const visitorWins = visitor.visitorWins;
    const visitorLosses = visitor.visitorLosses;

    // Determine total wins, losses, and win percentage and return the same
    const totalWins = homeWins + visitorWins;
    const totalLosses = homeLosses + visitorLosses;

    const winPercentage = fixDecimals(totalWins / (totalWins + totalLosses));

    return {
      totalWins: totalWins,
      totalLosses: totalLosses,
      winPercentage: winPercentage,
    };
  };

  return (
    <section>
      <div className="layout-container">
        <h2>Team Record</h2>
        <div className="state-overflowX">
          <table className="modules-table">
            <thead>
              <tr className="modules-trHeaderStyle">
                <th className="modules-thHeaderStyle modules-teamColors modules-firstTableCellStyle">
                  <span>W</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors">
                  <span>L</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors">
                  <span>PCT</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors">
                  <span>HOME</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors">
                  <span>AWAY</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors">
                  <span>DIV</span>
                </th>
                <th className="modules-thHeaderStyle modules-teamColors modules-lastTableCellStyle">
                  <span>CONF</span>
                </th>
              </tr>
            </thead>
            <TeamRecordBody
              teamRecord={overallRecord()}
              homeRecord={homeRecord()}
              visitorRecord={visitorRecord()}
              divisionRecord={divisionRecord()}
              conferenceRecord={conferenceRecord()}
            />
          </table>
        </div>
      </div>
    </section>
  );
}

export default TeamRecord;
