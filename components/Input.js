import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Input = (props) => {
  const router = useRouter();

  const initialInputData = { teamName: "" };

  const [inputData, setInputData] = useState(initialInputData);

  const [alert, setAlert] = useState();

  const [loadingStatus, setLoadingStatus] = useState(false);

  const route = inputData.teamName.replaceAll(" ", "-");

  // Turns off the loading spinner on the button and clears the input field once the route has changed
  useEffect(() => {
    const handleRouteChange = () => {
      setLoadingStatus(false);
      setInputData({ ...initialInputData });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  function handleChange(event) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const teamExists = props.teamInfo.find(
      (team) => team.teamName === inputData.teamName
    );

    if (teamExists) {
      setLoadingStatus(true);
      router.push(`/team/` + route + `-${teamExists.id}`);
    } else if (!teamExists) {
      setAlert(true);
    }
  }

  function handleNotification() {
    setAlert(false);
  }

  // Create option elements
  const options = props.teamInfo.map((team) => {
    return <option key={team.id} value={team.teamName} />;
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Enter full name of any NBA team"
            onChange={handleChange}
            list="teams"
            name="teamName"
            value={inputData.teamName}
          />
          <datalist id="teams">{options}</datalist>
        </div>
      </div>
      {alert && (
        <div className="notification is-danger">
          <button className="delete" onClick={handleNotification}></button>
          Please enter the full name of the team you wish to search.
        </div>
      )}
      <div className="field">
        <div className="control has-text-centered">
          <button
            className={`button has-text-weight-bold is-white is-fullwidth ${
              loadingStatus && "is-loading"
            }`}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
