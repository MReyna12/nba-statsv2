import fixDecimals from '../helpers/fix-decimals';

function PlayerTotalStats(props) {
  //console.log(props.playerData);

  // Map through the games for all five players and store various shooting related stats in an object
  const shootingStats = props.playerData.map((game) => {
    let fieldGoalsMade = 0;
    let fieldGoalsAttempted = 0;
    let threePointMade = 0;
    let threePointAttempted = 0;
    let freeThrowsMade = 0;
    let freeThrowsAttempted = 0;
    let totalPoints = 0;
    let gamesPlayed = game.data.length;

    game.data.forEach((oneGame) => {
      fieldGoalsMade += oneGame.fgm;
      fieldGoalsAttempted += oneGame.fga;
      threePointMade += oneGame.fg3m;
      threePointAttempted += oneGame.fg3a;
      freeThrowsMade += oneGame.ftm;
      freeThrowsAttempted += oneGame.fta;
      totalPoints += oneGame.pts;
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

    return {
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
    };
  });

  // Map through the games for all five players and store non-shooting stats in an object
  const nonShootingStats = props.playerData.map((game) => {
    let rebounds = 0;
    let assists = 0;
    let steals = 0;
    let blocks = 0;
    let turnovers = 0;
    let personalFouls = 0;
    let gamesPlayed = game.data.length;

    game.data.forEach((oneGame) => {
      rebounds += oneGame.reb;
      assists += oneGame.ast;
      steals += oneGame.stl;
      blocks += oneGame.blk;
      turnovers += oneGame.turnover;
      personalFouls += oneGame.pf;
    });

    const reboundsPerGame = fixDecimals(rebounds / gamesPlayed);

    const assistsPerGame = fixDecimals(assists / gamesPlayed);

    return {
      rebounds: rebounds,
      reboundsPerGame: reboundsPerGame,
      assists: assists,
      assistsPerGame: assistsPerGame,
      blocks: blocks,
      steals: steals,
      turnovers: turnovers,
      personalFouls: personalFouls,
      gamesPlayed: gamesPlayed,
    };
  });

  return (
    <div className="state-displayHidden">
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
              <tbody>
                <tr className="modules-trBodyStyle">
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneName"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneGamesPlayed"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneGamesPlayed"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneFGA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOne3P"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOne3PA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOne3PP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneEFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneFT"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneFTA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneFTP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneTRB"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneAST"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneSTL"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneBLK"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOneTOV"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOnePF"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerOnePTS"></span>
                  </td>
                </tr>
                <tr className="modules-trBodyStyle modules-secondAndFourthTRBodyStyle">
                  <td className="modules-firstTableCellStyle modules-totalsTDStyle">
                    <span className="modules-playerTwoName"></span>
                  </td>
                  <td className="modules-totalsTDStyle modules-totalsTDStyle">
                    <span className="modules-playerTwoGamesPlayed"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFG"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFGA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwo3P"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwo3PA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwo3PP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoEFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFT"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFTA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoFTP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoTRB"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoAST"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoSTL"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoBLK"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoTOV"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerTwoPF"></span>
                  </td>
                  <td className="modules-totalsTDStyle modules-lastTableCellStyle">
                    <span className="modules-playerTwoPTS"></span>
                  </td>
                </tr>
                <tr className="modules-trBodyStyle">
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeName"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeGamesPlayed"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFG"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFGA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThree3P"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThree3PA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThree3PP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeEFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFT"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFTA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeFTP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeTRB"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeAST"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeSTL"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeBLK"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreeTOV"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreePF"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerThreePTS"></span>
                  </td>
                </tr>
                <tr className="modules-trBodyStyle">
                  <td className="modules-totalsTDStyle modules-firstTableCellStyle">
                    <span className="modules-playerFourName"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourGamesPlayed"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFG"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFGA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFour3P"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFour3PA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFour3PP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourEFGP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFT"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFTA"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourFTP"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourTRB"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourAST"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourSTL"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourBLK"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourTOV"></span>
                  </td>
                  <td className="modules-totalsTDStyle">
                    <span className="modules-playerFourPF"></span>
                  </td>
                  <td className="modules-totalsTDStyle modules-lastTableCellStyle">
                    <span className="modules-playerFourPTS"></span>
                  </td>
                </tr>
                <tr className="modules-trBodyStyle">
                  <td>
                    <span className="modules-playerFiveName"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveGamesPlayed"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFG"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFGA"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFGP"></span>
                  </td>
                  <td>
                    <span className="modules-playerFive3P"></span>
                  </td>
                  <td>
                    <span className="modules-playerFive3PA"></span>
                  </td>
                  <td>
                    <span className="modules-playerFive3PP"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveEFGP"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFT"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFTA"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveFTP"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveTRB"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveAST"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveSTL"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveBLK"></span>
                  </td>
                  <td>
                    <span className="modules-playerFiveTOV"></span>
                  </td>
                  <td>
                    <span className="modules-playerFivePF"></span>
                  </td>
                  <td>
                    <span className="modules-playerFivePTS"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlayerTotalStats;
