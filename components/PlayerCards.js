function PlayerCards(props) {
  const card = props.playerAverages.map((player) => {
    return (
      <>
        <figure className="modules-playerImg">
          <img id="module-playerOneImg" src="" alt="" />
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
