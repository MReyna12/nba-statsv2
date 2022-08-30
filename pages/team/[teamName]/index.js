import TeamRecord from '../../../components/TeamRecord';

const team = (props) => {
  return (
    <TeamRecord
      games={props.regularSeasonData.data}
      teamName={props.teamName}
    />
  );
};

export default team;

export const getStaticProps = async (context) => {
  // Place the name + the team id into an array
  const splitName = context.params.teamName.split('-');

  // The id is always the last element in the splitName array
  const id = splitName[splitName.length - 1];

  // Store the team name without the hypens and the id number. The id number is always the last element of the splitName array.
  const standardTeamName = splitName.slice(0, splitName.length - 1).join(' ');

  const res = await fetch(
    `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}&per_page=100&start_date=2021-10-19&end_date=2022-04-11`
  );
  const regularSeasonData = await res.json();

  return {
    props: {
      regularSeasonData: regularSeasonData,
      teamName: standardTeamName,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
  const teams = await res.json();

  // The teamName matches the teamName route set forth in the Input component.
  const paths = teams.data.map((team) => ({
    params: { teamName: `${team.full_name.replaceAll(' ', '-')}-${team.id}` },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
