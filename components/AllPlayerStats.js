import { nanoid } from "nanoid";
import fixDecimals from "../helpers/fix-decimals";
import StatTableCell from "./StatTableCell";
import PlayerCards from "./PlayerCards";
import color from "../helpers/get-team-colors";

function AllPlayerStats(props) {
  // Map through the games for all five players and create table rows and table data cells with each player's stats
  const stats = props.playerData.map((game) => {
    // Store each player's first and last name
    let playerName = `${game.data[0].player.first_name} ${game.data[0].player.last_name}`;

    // Destructuring assignment - allows unpacking values from arrays into distrinct variables.
    let [
      fieldGoalsMade,
      fieldGoalsAttempted,
      threePointMade,
      threePointAttempted,
      freeThrowsMade,
      freeThrowsAttempted,
      totalPoints,
      rebounds,
      assists,
      steals,
      blocks,
      turnovers,
      personalFouls,
    ] = Array(13).fill(0);

    // Find the total number for each stat below by adding the applicable stat total from each game
    let gamesPlayed = game.data.length;

    game.data.forEach((oneGame) => {
      fieldGoalsMade += oneGame.fgm;
      fieldGoalsAttempted += oneGame.fga;
      threePointMade += oneGame.fg3m;
      threePointAttempted += oneGame.fg3a;
      freeThrowsMade += oneGame.ftm;
      freeThrowsAttempted += oneGame.fta;
      totalPoints += oneGame.pts;

      rebounds += oneGame.reb;
      assists += oneGame.ast;
      steals += oneGame.stl;
      blocks += oneGame.blk;
      turnovers += oneGame.turnover;
      personalFouls += oneGame.pf;
    });

    const fieldGoalPercentage = fixDecimals(
      fieldGoalsMade / fieldGoalsAttempted
    );

    const threePointPercentage = fixDecimals(
      threePointMade / threePointAttempted
    );

    const effectiveFieldGoalPercentage = fixDecimals(
      (fieldGoalsMade + 0.5 * threePointMade) / fieldGoalsAttempted
    );

    const freeThrowPercentage = fixDecimals(
      freeThrowsMade / freeThrowsAttempted
    );

    const pointsPerGame = fixDecimals(totalPoints / gamesPlayed);

    const reboundsPerGame = fixDecimals(rebounds / gamesPlayed);

    const assistsPerGame = fixDecimals(assists / gamesPlayed);

    return {
      playerName: playerName,
      gamesPlayed: gamesPlayed,
      fieldGoalsMade: fieldGoalsMade,
      fieldGoalsAttempted: fieldGoalsAttempted,
      fieldGoalPercentage: fieldGoalPercentage,
      threePointMade: threePointMade,
      threePointAttempted: threePointAttempted,
      threePointPercentage: threePointPercentage,
      effectiveFieldGoalPercentage: effectiveFieldGoalPercentage,
      freeThrowsMade: freeThrowsMade,
      freeThrowsAttempted: freeThrowsAttempted,
      freeThrowPercentage: freeThrowPercentage,
      totalPoints: totalPoints,
      pointsPerGame: pointsPerGame,
      rebounds: rebounds,
      reboundsPerGame: reboundsPerGame,
      assists: assists,
      assistsPerGame: assistsPerGame,
      steals: steals,
      blocks: blocks,
      turnovers: turnovers,
      personalFouls: personalFouls,
    };
  });

  const playerTableData = stats.map((player) => {
    return (
      <tr key={nanoid()} className="has-text-centered">
        <StatTableCell statTotals={player} />
      </tr>
    );
  });

  const primaryColor =
    color.teamColor[props.playerData[3].data[0].team.full_name][0];
  const secondaryColor =
    color.teamColor[props.playerData[3].data[0].team.full_name][1];

  return (
    <section className="section">
      <div className="container py-6">
        <div>
          <h2 className="title">Starting Five Averages</h2>

          <div>
            <PlayerCards
              playerAverages={stats}
              teamRoute={props.teamImgRoute}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </div>
        </div>
      </div>
      <div className="container py-6">
        <div>
          <h2 className="title">Totals</h2>
          <div className="table-container">
            <table className="table is-fullwidth">
              <thead style={{ backgroundColor: primaryColor }}>
                <tr className="modules-trHeaderStyle">
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Player name">Name</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Games played">G</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Field goals made">FG</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Field goals attempted">FGA</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Field goals made percentage">FG%</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Three pointers made">3P</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Three pointers attempted">3PA</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Three pointers made percentage">3P%</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Effective field goal percentage">eFG%</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Free throws made">FT</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Free throws attempted">FTA</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Free throws made percentage">FT%</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Rebounds">REB</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Assists">AST</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Steals">STL</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Blocks">BLK</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Turnovers">TOV</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Personal fouls">PF</abbr>
                  </th>
                  <th
                    className="has-text-centered"
                    style={{ color: secondaryColor }}
                  >
                    <abbr title="Points scored">PTS</abbr>
                  </th>
                </tr>
              </thead>
              <tbody>{playerTableData}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllPlayerStats;
