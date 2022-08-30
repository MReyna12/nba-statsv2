function TeamRecordBody(props) {
  // Create table body populated the data from functions above
  return (
    <tbody className="modules-trBodyStyle">
      <tr>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-totalWins">
            {props.teamRecord.totalWins}
          </span>
        </td>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-totalLosses">
            {props.teamRecord.totalLosses}
          </span>
        </td>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-winPercentage">
            {props.teamRecord.winPercentage}
          </span>
        </td>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-homeRecord">{`${props.homeRecord.homeWins} - ${props.homeRecord.homeLosses}`}</span>
        </td>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-awayRecord">{`${props.visitorRecord.visitorWins} - ${props.visitorRecord.visitorLosses}`}</span>
        </td>
        <td className="modules-teamRecordTDPadding">
          <span className="modules-divisionRecord">{`${props.divisionRecord.divisionWins} - ${props.divisionRecord.divisionLosses}`}</span>
        </td>
        <td className="modules-teamRecordLastTDPadding">
          <span className="modules-conferenceRecord">{`${props.conferenceRecord.conferenceWins} - ${props.conferenceRecord.conferenceLosses}`}</span>
        </td>
      </tr>
    </tbody>
  );
}

export default TeamRecordBody;
