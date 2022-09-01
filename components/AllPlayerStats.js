import fixDecimals from '../helpers/fix-decimals';
import StatTableCell from './StatTableCell';
import PlayerCards from './PlayerCards';

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
      <tr key={player.id}>
        <StatTableCell statTotals={player} />
      </tr>
    );
  });

  return (
    <div>
      <section>
        <div className="layout-container">
          <div>
            <h2>Starting Five Averages</h2>
          </div>
          <div className="layout-playerWrapper modules-firstPlayerStatBox">
            <PlayerCards
              playerAverages={stats}
              teamRoute={props.teamImgRoute}
            />
          </div>
        </div>
      </section>
      <section className="layout-container">
        <div>
          <h2>Totals</h2>
          <div className="state-overflowX">
            <table className="modules-table">
              <thead>
                <tr className="modules-trHeaderStyle">
                  <th className="modules-thHeaderStyle modules-teamColors modules-firstTableCellStyle">
                    <span>Name</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>G</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FG</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FGA</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FG%</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>3P</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>3PA</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>3P%</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>eFG%</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FT</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FTA</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>FT%</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>TRB</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>AST</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>STL</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>BLK</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>TOV</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors">
                    <span>PF</span>
                  </th>
                  <th className="modules-thHeaderStyle modules-teamColors modules-lastTableCellStyle">
                    <span>PTS</span>
                  </th>
                </tr>
              </thead>
              <tbody>{playerTableData}</tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllPlayerStats;
