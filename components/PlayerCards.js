function PlayerCards(props) {
  const team = props.teamRoute;
  const card = props.playerAverages.map((player) => {
    const playerNameRoute = player.playerName.split(' ').join('-');
    return (
      <>
        <figure className="modules-playerImg">
          <img
            id="module-playerOneImg"
            src={`https://nba-team.s3.amazonaws.com/${team}/${playerNameRoute}.png`}
            alt={`Animated depiction of ${player.playerName} wearing a ${team} jersey`}
          />
        </figure>
        <aside className="modules-statBlockBorder">
          <h4 className="modules-playerOneName modules-teamColors">
            {player.playerName}
          </h4>
          <ul className="modules-playerStatBox">
            <li className="modules-playerSingleStat">
              <div>
                <div className="modules-statMargin">
                  <span className="modules-statCategory">PTS</span>
                </div>
                <div>
                  <span className="modules-playerOnePPG modules-statNumber">
                    {player.pointsPerGame}
                  </span>
                </div>
              </div>
            </li>
            <li className="modules-playerSingleStat">
              <div>
                <div className="modules-statMargin">
                  <span className="modules-statCategory">REB</span>
                </div>
                <div>
                  <span className="modules-playerOneREBPG modules-statNumber">
                    {player.reboundsPerGame}
                  </span>
                </div>
              </div>
            </li>
            <li className="modules-playerSingleStat">
              <div>
                <div className="modules-statMargin">
                  <span className="modules-statCategory">AST</span>
                </div>
                <div>
                  <span className="modules-playerOneASTPG modules-statNumber">
                    {player.assistsPerGame}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </>
    );
  });

  return <div className="modules-mediaPlayerSpacing">{card}</div>;
}

export default PlayerCards;
