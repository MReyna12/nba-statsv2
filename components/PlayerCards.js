import Image from "next/image";

function PlayerCards(props) {
  const team = props.teamRoute;
  const card = props.playerAverages.map((player) => {
    const playerNameRoute = player.playerName.split(" ").join("-");
    return (
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <h4
              style={{
                backgroundColor: props.primaryColor,
                color: props.secondaryColor,
              }}
              className="card-header-title is-centered"
            >
              {player.playerName}
            </h4>
            <figure className="image has-text-centered mt-4">
              <Image
                src={`https://nba-team.s3.amazonaws.com/${team}/${playerNameRoute}.png`}
                alt={`Animated depiction of ${player.playerName} wearing a ${team} jersey`}
                width={200}
                height={160}
              />
            </figure>
          </div>
          <div className="card-content">
            <ul className="is-flex is-justify-content-space-between has-text-centered">
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold">PTS</span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold">
                      {player.pointsPerGame}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold">REB</span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold">
                      {player.reboundsPerGame}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold">AST</span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold">
                      {player.assistsPerGame}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return <div className="columns">{card}</div>;
}

export default PlayerCards;
