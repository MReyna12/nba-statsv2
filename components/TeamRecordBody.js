function TeamRecordBody(props) {
  // Create table body populated the data from functions above
  return (
    <tbody>
      <tr>
        <td className="has-text-weight-bold">{props.teamRecord.totalWins}</td>
        <td className="has-text-weight-bold">{props.teamRecord.totalLosses}</td>
        <td className="has-text-weight-bold">
          {props.teamRecord.winPercentage}
        </td>
        <td className="has-text-weight-bold">
          {`${props.homeRecord.homeWins} - ${props.homeRecord.homeLosses}`}
        </td>
        <td className="has-text-weight-bold">
          {`${props.visitorRecord.visitorWins} - ${props.visitorRecord.visitorLosses}`}
        </td>
        <td className="has-text-weight-bold">
          {`${props.divisionRecord.divisionWins} - ${props.divisionRecord.divisionLosses}`}
        </td>
        <td className="has-text-weight-bold">
          {`${props.conferenceRecord.conferenceWins} - ${props.conferenceRecord.conferenceLosses}`}
        </td>
      </tr>
    </tbody>
  );
}

export default TeamRecordBody;
