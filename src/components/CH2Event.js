import React, { useState } from "react";

function CH2Event() {
  const [data, setData] = useState({
    name: "Kwonsang",
    age: 26,
    date: "2023-04-22",
    sports: "야구",
    isChecked: false,
    language: [],
    club: "두산",
    clubs: [],
  });

  const changeString = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const changeNumber = (evt) => setData({ ...data, [evt.target.name]: evt.target.value });
  const changeIsChecked = (evt) => setData({ ...data, isChecked: !data.isChecked });
  const changeLanguage = (evt) => {
    const lang = evt.target.value;
    if (data.language.includes(lang)) {
      setData({ ...data, language: data.language.filter((value, index) => value !== lang) });
    } else {
      setData({ ...data, language: data.language.concat(lang) });
    }
  };
  const changeClubs = (evt) => setData({ ...data, clubs: Array.from(evt.target.selectedOptions).map((value) => value.value) });
  const sendData = (evt) => {
    evt.preventDefault();
    console.log(JSON.stringify(data, "", 4));
  };

  return (
    <div>
      <h2>CH2Event</h2>
      <form>
        Name: {data.name}
        {/* onChange 이벤트가 발생하면 SyntheticEvent 객체가 실행되는 함수의 첫 번째 인자로 전달된다. */}
        <input type="text" name="name" className="form-control" value={data.name} onChange={changeString}></input>
        Age: {data.age}
        <input type="number" name="age" className="form-control" value={data.age} onChange={changeNumber}></input>
        Date: {data.date}
        <input type="date" name="date" className="form-control" value={data.date} onChange={changeString}></input>
        Hobby: {data.sports}
        <div className="form-check">
          {/* JSX에서 for이 예약어이므로 htmlFor를 대신 사용 */}
          <label htmlFor="baseball" className="form-check-label">
            야구
          </label>
          <input
            type="radio"
            name="sports"
            value="야구"
            id="baseball"
            className="form-check-input"
            onChange={changeString}
            defaultChecked={data.sports === "야구"}
          ></input>
        </div>
        <div className="form-check">
          <label htmlFor="soccer" className="form-check-label">
            축구
          </label>
          <input
            type="radio"
            name="sports"
            value="축구"
            id="soccer"
            className="form-check-input"
            onChange={changeString}
            defaultChecked={data.sports === "축구"}
          ></input>
        </div>
        <div className="form-check">
          <label htmlFor="basketball" className="form-check-label">
            농구
          </label>
          <input
            type="radio"
            name="sports"
            value="농구"
            id="basketball"
            className="form-check-input"
            onChange={changeString}
            defaultChecked={data.sports === "농구"}
          ></input>
        </div>
        Agreement: {data.isChecked ? "동의" : "동의 안 함"}
        <div className="form-check">
          <label htmlFor="check" className="form-check-label">
            동의
          </label>
          <input type="checkbox" name="isChecked" className="form-check-input" value={data.isChecked} onChange={changeIsChecked}></input>
        </div>
        Languages: [{data.language.join(" ")}]
        <div className="form-check">
          <label htmlFor="react" className="form-check-label">
            React
          </label>
          <input type="checkbox" name="language" value="React" id="react" className="form-check-input" onChange={changeLanguage}></input>
        </div>
        <div className="form-check">
          <label htmlFor="vue" className="form-check-label">
            Vue
          </label>
          <input type="checkbox" name="language" value="Vue" id="vue" className="form-check-input" onChange={changeLanguage}></input>
        </div>
        Favorite Club: {data.club}
        <div className="form-check">
          <select name="club" className="form-control" value={data.club} onChange={changeString}>
            <option>두산</option>
            <option>SSG</option>
            <option>삼성</option>
          </select>
        </div>
        Favorite Clubs: [{data.clubs.join(" ")}]
        <div className="form-check">
          <select name="clubs" className="form-control" multiple size="3" value={data.clubs} onChange={changeClubs}>
            <option>두산</option>
            <option>SSG</option>
            <option>삼성</option>
          </select>
        </div>
        <br />
        <button type="submit" onClick={sendData}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default CH2Event;
