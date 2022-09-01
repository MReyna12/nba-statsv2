function StatTableCell(props) {
  return (
    <>
      <td className="has-text-weight-bold">{props.statTotals.playerName}</td>
      <td className="has-text-weight-bold">{props.statTotals.gamesPlayed}</td>
      <td className="has-text-weight-bold">
        {props.statTotals.fieldGoalsMade}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.fieldGoalsAttempted}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.fieldGoalPercentage}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.threePointMade}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.threePointAttempted}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.threePointPercentage}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.effectiveFieldGoalPercentage}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.freeThrowsMade}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.fieldGoalsAttempted}
      </td>
      <td className="has-text-weight-bold">
        {props.statTotals.freeThrowPercentage}
      </td>
      <td className="has-text-weight-bold">{props.statTotals.rebounds}</td>
      <td className="has-text-weight-bold">{props.statTotals.assists}</td>
      <td className="has-text-weight-bold">{props.statTotals.steals}</td>
      <td className="has-text-weight-bold">{props.statTotals.blocks}</td>
      <td className="has-text-weight-bold">{props.statTotals.turnovers}</td>
      <td className="has-text-weight-bold">{props.statTotals.personalFouls}</td>
      <td className="has-text-weight-bold">{props.statTotals.totalPoints}</td>
    </>
  );
}

export default StatTableCell;
