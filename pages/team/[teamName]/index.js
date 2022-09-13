import HeadData from "../../../components/Head";
import TeamRecord from "../../../components/TeamRecord";
import AllPlayerStats from "../../../components/AllPlayerStats";
import Nav from "../../../components/Nav";
import playerIDNumbers from "../../../helpers/getPlayerID";
import Input from "../../../components/Input";
import color from "../../../helpers/get-team-colors";

const team = (props) => {
  // Team colors to generate styles based on the team page
  const primaryColor =
    color.teamColor[props.playerGames[3].data[0].team.full_name][0];
  const secondaryColor =
    color.teamColor[props.playerGames[3].data[0].team.full_name][1];

  // In order for the Input component to work outside of the home page, passing the same teams prop to the Input component
  const allTeams = props.teams.data.map((team) => {
    return {
      teamName: team.full_name,
      id: team.id,
    };
  });

  return (
    <>
      <HeadData />
      <Nav primaryColor={primaryColor} />
      <section
        style={{ backgroundColor: primaryColor, color: secondaryColor }}
        className="section"
      >
        <div className="container py-6">
          <div className="columns is-desktop is-align-items-center">
            <div className="column is-three-fifths-desktop">
              <h1
                style={{ color: secondaryColor }}
                className="title is-size-1 has-text-weight-bold"
              >
                {props.playerGames[3].data[0].team.full_name}
              </h1>
              <h2
                style={{ color: secondaryColor }}
                className="subtitle is-size-3"
              >
                2021-2022 Regular Season
              </h2>
            </div>
            <div className="column">
              <Input teamInfo={allTeams} />
            </div>
          </div>
        </div>
      </section>
      <AllPlayerStats
        playerData={props.playerGames}
        teamImgRoute={props.teamImgRoute}
      />
      <TeamRecord
        games={props.regularSeasonData.data}
        teamName={props.teamName}
      />
    </>
  );
};

export default team;

export const getStaticProps = async (context) => {
  try {
    // Place the name + the team id into an array
    const splitName = context.params.teamName.split("-");

    // The id is always the last element in the splitName array
    const id = splitName[splitName.length - 1];

    // Store the team name without the hypens and the id number. The id number is always the last element of the splitName array.
    const standardTeamName = splitName.slice(0, splitName.length - 1).join(" ");

    // Fetch the team related stats
    const res = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}&per_page=100&start_date=2021-10-19&end_date=2022-04-11`
    );
    const regularSeasonData = await res.json();

    // Fetch the player related stats - because the API does not provide an easy way to find player IDs without searching through thousands of players, I manually found the player Ids and put them into a helper object
    const playerIds = playerIDNumbers.playerID[standardTeamName];

    const playerUrls = [
      `https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18&end_date=2022-04-11&player_ids[]=${playerIds[0]}`,
      `https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18&end_date=2022-04-11&player_ids[]=${playerIds[1]}`,
      `https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18&end_date=2022-04-11&player_ids[]=${playerIds[2]}`,
      `https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18&end_date=2022-04-11&player_ids[]=${playerIds[3]}`,
      `https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18&end_date=2022-04-11&player_ids[]=${playerIds[4]}`,
    ];

    const fetchPlayerGames = async () => {
      const playerRes = await Promise.all(
        playerUrls.map((url) => fetch(url).then((res) => res.json()))
      );
      return playerRes;
    };

    const playerGames = await fetchPlayerGames();

    const teamRes = await fetch(`https://www.balldontlie.io/api/v1/teams`);
    const teams = await teamRes.json();

    return {
      props: {
        regularSeasonData: regularSeasonData || null,
        teamName: standardTeamName || null,
        playerGames: playerGames || null,
        teamImgRoute: context.params.teamName || null,
        teams: teams || null,
      },
    };
  } catch (err) {
    console.error(err);
    console.log(typeof regularSeasonData);
  }
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
  const teams = await res.json();

  // The teamName matches the teamName route set forth in the Input component.
  const paths = teams.data.map((team) => ({
    params: { teamName: `${team.full_name.replaceAll(" ", "-")}-${team.id}` },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
