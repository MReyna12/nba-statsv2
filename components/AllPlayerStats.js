import fixDecimals from '../helpers/fix-decimals';
import StatTableCell from './StatTableCell';
import PlayerCards from './PlayerCards';
import color from '../helpers/get-team-colors';

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

  const theadBackgroundColor =
    color.teamColor[props.playerData[0].data[0].team.full_name][0];
  const theadFontColor =
    color.teamColor[props.playerData[0].data[0].team.full_name][1];

  return (
    <div className="container">
      <section>
        <div>
          <div className="layout-teamNameLogo">
            <img
              id="module-teamLogo"
              src={`https://nba-team.s3.amazonaws.com/${props.teamImgRoute}/${props.teamImgRoute}.png`}
              alt=""
            />
            <h1>{props.playerData[0].data[0].team.full_name}</h1>
          </div>
          <div className="modules-teamRecord">
            <span>2021-2022 Regular Season Record:</span>
            <span className="modules-overallRecord"></span>
          </div>
        </div>
      </section>
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
      <section>
        <div>
          <h2 className="title">Totals</h2>
          <div className="table-container">
            <table className="table is-fullwidth">
              <thead style={{ backgroundColor: theadBackgroundColor }}>
                <tr className="modules-trHeaderStyle">
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Player name">Name</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Games played">G</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Field goals made">FG</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Field goals attempted">FGA</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Field goals made percentage">FG%</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Three pointers made">3P</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Three pointers attempted">3PA</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Three pointers made percentage">3P%</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Effective field goal percentage">eFG%</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Free throws made">FT</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Free throws attempted">FTA</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Free throws made percentage">FT%</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Rebounds">REB</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Assists">AST</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Steals">STL</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Blocks">BLK</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Turnovers">TOV</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Personal fouls">PF</abbr>
                  </th>
                  <th style={{ color: theadFontColor }}>
                    <abbr title="Points scored">PTS</abbr>
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
