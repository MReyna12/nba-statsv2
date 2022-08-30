function TeamRecord(props) {
  // Determine the home and visitor games for the 2021-2022 regular season
  const homeGames = props.games.filter(
    (game) => game.home_team.full_name === props.teamName
  );

  const visitorGames = props.games.filter(
    (game) => game.visitor_team.full_name === props.teamName
  );

  const homeRecord = () => {
    let wins = 0;
    let losses = 0;
    props.games.forEach((game) => {
      if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score > game.visitor_team_score
      ) {
        wins += 1;
      } else if (
        game.home_team.full_name === props.teamName &&
        game.home_team_score < game.visitor_team_score
      ) {
        losses += 1;
      }
    });

    return {
      wins: wins,
      losses: losses,
    };
  };

  const visitorRecord = () => {
    let wins = 0;
    let losses = 0;
    props.games.forEach((game) => {
      if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score > game.home_team_score
      ) {
        wins += 1;
      } else if (
        game.visitor_team.full_name === props.teamName &&
        game.visitor_team_score < game.home_team_score
      ) {
        losses += 1;
      }
    });

    return {
      wins: wins,
      losses: losses,
    };
  };

  const divisionRecord = () => {
    let wins = 0;
    let losses = 0;
    //const teamDivision =
  };
}

export default TeamRecord;
