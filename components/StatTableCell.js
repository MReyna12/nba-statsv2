function StatTableCell(props) {
  return (
    <>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.playerName}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.gamesPlayed}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.fieldGoalsMade}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.fieldGoalsAttempted}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.fieldGoalPercentage}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.threePointMade}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.threePointAttempted}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.threePointPercentage}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.effectiveFieldGoalPercentage}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.freeThrowsMade}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.fieldGoalsAttempted}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.freeThrowPercentage}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.rebounds}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.assists}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.steals}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.blocks}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.turnovers}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.personalFouls}
      </td>
      <td className="has-text-weight-bold has-text-centered">
        {props.statTotals.totalPoints}
      </td>
    </>
  );
}

export default StatTableCell;
