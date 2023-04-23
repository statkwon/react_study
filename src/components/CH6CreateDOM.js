import React, { useRef, useState } from "react";

function CH6CreateDOM() {
  const cnt = useRef(4);
  const addRef = useRef(null);
  const [arr, setArr] = useState(["두산", "SSG", "삼성"]);
  const [obj, setObj] = useState([
    { id: 1, team: "두산", value: "두산" },
    { id: 2, team: "SSG", value: "SSG" },
    { id: 3, team: "삼성", value: "삼성" },
  ]);
  const [data, setData] = useState({
    teamOne: "",
    teamTwo: "",
    team: "",
    isChecked: false,
  });

  const changeTeam = (evt) => setData({ ...data, [evt.target.name]: evt.target.value === "default" ? "" : evt.target.value });
  const addArr = () => {
    if (data.team.trim()) setArr(arr.concat(data.team));
    addRef.current.value = "";
    addRef.current.focus();
  };
  const changeIsChecked = () => setData({ ...data, isChecked: !data.isChecked });
  const addObj = (team) => {
    setObj(obj.concat({ id: cnt.current++, team: team, value: team }));
  };

  const MakeTable = () => {
    return obj.map((value) => (
      <tr key={value.id}>
        <td>{value.id}</td>
        <td>{value.team}</td>
        <td>{value.value}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>CH6CreateDOM</h2>첫 번째 팀: {data.teamOne}
      <select name="teamOne" className="form-control" onChange={changeTeam}>
        <option value="default">팀을 선택하세요</option>
        {arr.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <br />
      {data.isChecked && (
        <div className="input-group">
          <input type="text" name="team" ref={addRef} className="form-control" onChange={changeTeam}></input>
          <button className="btn btn-outline-primary btn-sm" onClick={addArr}>
            Add Team
          </button>
        </div>
      )}
      <br />
      <button className="btn btn-outline-primary btn-sm" onClick={changeIsChecked}>
        {data.isChecked ? "Hide" : "Show"}
      </button>
      <br />
      <br />두 번째 팀: {data.teamTwo}
      <select name="teamTwo" className="form-control" onChange={changeTeam}>
        <option value="default">팀을 선택하세요</option>
        {obj.map((value) => (
          <option key={value.id}>{value.team}</option>
        ))}
      </select>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Team</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <MakeTable />
        </tbody>
      </table>
      <button className="btn btn-outline-primary btn-sm" onClick={() => addObj("NC")}>
        Add Team
      </button>
    </div>
  );
}

export default CH6CreateDOM;
