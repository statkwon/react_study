import React from "react";
import { useParams } from "react-router-dom";

const data = [
  { id: 1, name: "Lionel Messi", position: "FW", backno: 30, age: 35 },
  { id: 2, name: "Kylian Mbappe", position: "FW", backno: 7, age: 24 },
  { id: 3, name: "Neymar Junior", position: "FW", backno: 10, age: 31 },
  { id: 4, name: "Marco Verratti", position: "MF", backno: 6, age: 30 },
  { id: 5, name: "Sergio Ramos", position: "DF", backno: 4, age: 37 },
];

function CH13Param() {
  // URL 파라미터: ID 또는 이름을 사용하여 특정 데이터 조회
  const params = useParams();
  const player = data.find((value) => value.id === Number(params.id));

  return (
    <div>
      <h2>CH13Param</h2>
      <div>
        ID: {params.id} <br />
        Name: {params.name}
      </div>
      <br />
      <div>
        ID: {player && player.id} <br />
        Name: {player && player.name} <br />
        Position: {player && player.position} <br />
        BackNo: {player && player.backno} <br />
        Age: {player && player.age}
      </div>
    </div>
  );
}

export default CH13Param;
