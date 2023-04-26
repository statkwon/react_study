import React from "react";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const data = [
  { id: 1, name: "Lionel Messi", position: "FW", backno: 30, age: 35 },
  { id: 2, name: "Kylian Mbappe", position: "FW", backno: 7, age: 24 },
  { id: 3, name: "Neymar Junior", position: "FW", backno: 10, age: 31 },
  { id: 4, name: "Marco Verratti", position: "MF", backno: 6, age: 30 },
  { id: 5, name: "Sergio Ramos", position: "DF", backno: 4, age: 37 },
];

function CH13QueryString() {
  // 쿼리스트링: 키워드 검색, 페이지네이션, 정렬 방식 등 데이터 조회에 필요한 옵션 전달
  const location = useLocation();
  const query = qs.parse(location.search);
  const player = data.find((value) => value.id === Number(query.id));

  return (
    <div>
      <h2>CH13QueryString</h2>
      <div>
        pathname: {location.pathname} <br />
        search: {location.search}
      </div>
      <br />
      <div>
        ID: {query.id} <br />
        Name: {query.name}
      </div>
      <br />
      <div>
        ID: {player.id} <br />
        Name: {player.name} <br />
        Position: {player.position} <br />
        BackNo: {player.backno} <br />
        Age: {player.age}
      </div>
    </div>
  );
}

export default CH13QueryString;
