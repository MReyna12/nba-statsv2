import { useState } from 'react';

const Input = (props) => {
  const [inputData, setInputData] = useState({
    teamName: '',
  });

  function handleChange(event) {
    setInputData((prevInputData) => {
      return {
        ...prevInputData,
        [event.target.name]: event.target.value,
      };
    });
  }

  // Create dynamic option elements
  const options = props.teamInfo.map((team) => {
    return <option key={team.id} value={team.teamName} />;
  });

  return (
    <div className="navbar-item">
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
  );
};

export default Input;
