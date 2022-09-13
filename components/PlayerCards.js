import Image from "next/image";
import { nanoid } from "nanoid";

function PlayerCards(props) {
  const team = props.teamRoute;
  const card = props.playerAverages.map((player) => {
    const playerNameRoute = player.playerName.split(" ").join("-");
    return (
      <div key={nanoid()} className="column is-one-third">
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
            <ul className="is-flex is-justify-content-space-evenly has-text-centered">
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
                      PTS
                    </span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
                      {player.pointsPerGame}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
                      REB
                    </span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
                      {player.reboundsPerGame}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
                      AST
                    </span>
                  </div>
                  <div>
                    <span className="has-text-weight-bold has-text-black">
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

  return <div className="columns is-multiline">{card}</div>;
}

export default PlayerCards;
