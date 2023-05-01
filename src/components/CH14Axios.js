import React, { useCallback, useState } from "react";
import axios from "axios";

function CH14Axios() {
  const baseURL = "http://localhost:8000/contacts/";
  const [data, setData] = useState({});

  const addContact = useCallback(() => {
    const sendData = { name: "Kwonsang Jung", tel: "010-9230-3813", address: "서울시" };
    axios
      .post(baseURL, sendData, { headers: { "Content-Type": "application/json" } })
      .then((resp) => setData(JSON.stringify(resp.data, "", 4)))
      .catch((error) => console.log(error));
  }, []);
  const getContactList = useCallback(() => {
    axios
      .get(baseURL, { params: { pageno: 1, pagesize: 10 }, headers: { "Content-Type": "application/json" } })
      .then((resp) => setData(JSON.stringify(resp.data, "", 4)))
      .catch((error) => console.log(error));
  }, []);
  const getContact = useCallback((no) => {
    axios
      .get(baseURL + no)
      .then((resp) => setData(JSON.stringify(resp.data, "", 4)))
      .catch((error) => console.log(error));
  }, []);
  const updateContact = useCallback((no) => {
    const sendData = { no: no, name: "Lionel Messi", tel: "010-1234-5678", address: "아르헨티나" };
    axios
      .put(baseURL + no, sendData, { headers: { "Content-Type": "application/json" } })
      .then((resp) => sendData(JSON.stringify(resp.data, "", 4)))
      .catch((error) => console.log(error));
  }, []);
  const deleteContact = useCallback((no) => {
    axios
      .delete(baseURL + no)
      .then((resp) => setData(JSON.stringify(resp.data, "", 4)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>CH14Axios</h2>
      <button onClick={addContact}>Add</button>
      <button onClick={getContactList}>Data List</button>
      <button onClick={() => getContact(1682598771034)}>Get</button>
      <button onClick={() => updateContact(1682598771034)}>Update</button>
      <button onClick={() => deleteContact(1682598771034)}>Delete</button>
      <br />
      <br />
      <textarea cols="100" rows="15" defaultValue={data}></textarea>
    </div>
  );
}

export default CH14Axios;
