function StatTableCell(props) {
  return (
    <>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneName">
          {props.statTotals.playerName}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneGamesPlayed">
          {props.statTotals.gamesPlayed}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFG">
          {props.statTotals.fieldGoalsMade}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFGA">
          {props.statTotals.fieldGoalsAttempted}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFGP">
          {props.statTotals.fieldGoalPercentage}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOne3P">
          {props.statTotals.threePointMade}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOne3PA">
          {props.statTotals.threePointAttempted}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOne3PP">
          {props.statTotals.threePointPercentage}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneEFGP">
          {props.statTotals.effectiveFieldGoalPercentage}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFT">
          {props.statTotals.freeThrowsMade}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFTA">
          {props.statTotals.fieldGoalsAttempted}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneFTP">
          {props.statTotals.freeThrowPercentage}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneTRB">
          {props.statTotals.rebounds}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneAST">{props.statTotals.assists}</span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneSTL">{props.statTotals.steals}</span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneBLK">{props.statTotals.blocks}</span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOneTOV">
          {props.statTotals.turnovers}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOnePF">
          {props.statTotals.personalFouls}
        </span>
      </td>
      <td className="modules-totalsTDStyle">
        <span className="modules-playerOnePTS">
          {props.statTotals.totalPoints}
        </span>
      </td>
    </>
  );
}

export default StatTableCell;
