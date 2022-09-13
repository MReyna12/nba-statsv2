import HeadData from "../components/Head";
import Input from "../components/Input";
import homeStyles from "../styles/Home.module.css";

export default function Home(props) {
  const teams = props.teams.data.map((team) => {
    return {
      teamName: team.full_name,
      id: team.id,
    };
  });

  return (
    <div>
      <HeadData />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div
              className={`box has-background-dark p-6 p-3-mobile is-rounded is-flex is-flex-direction-column is-align-items-center ${homeStyles["box-shadow"]}`}
            >
              <h1
                className={`title is-size-1 is-size-3-mobile has-text-white is-uppercase has-text-weight-bold has-text-centered mb-6 ${homeStyles["title-spacing"]}`}
              >
                starting five
              </h1>
              <p className="subtitle is-3 is-size-5-mobile has-text-white is-capitalized has-text-centered">
                Search 2021 - 2022 NBA regular season stats
              </p>
              <div className="column is-full-mobile is-half">
                <Input teamInfo={teams} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
  const teams = await res.json();

  return {
    props: {
      teams,
    },
  };
};
