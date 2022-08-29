import { useState } from 'react';
import { useRouter } from 'next/router';

const Input = (props) => {
  const [inputData, setInputData] = useState({
    teamName: '',
  });

  const [alert, setAlert] = useState();

  function handleChange(event) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const teamExists = props.teamInfo.find(
      (team) => team.teamName === inputData.teamName
    );

    if (teamExists) {
      router.push('/team/' + inputData.teamName);
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
          <button className="button">Search</button>
        </div>
      </div>
    </form>
  );
};

export default Input;
