const Input = () => {
  return (
    <div>
      <input
        class="input is-medium"
        type="text"
        list="data"
        placeholder="Medium input"
      />
      <datalist>
        <option value={'Atlanta Hawks'} />
      </datalist>
    </div>
  );
};

export default Input;
