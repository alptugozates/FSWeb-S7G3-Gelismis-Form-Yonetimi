import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from "axios";
import * as Yup from "yup"
import { useState } from 'react';



const dummyForm = { name: "", email: "", password: "", terms: false };
const hataErrors = { name: "", email: "", password: "", terms: "" };
function App() {

  const [form, setForm] = useState(dummyForm);
  const [error, setError] = useState(hataErrors);

  const handleSubmit = (e) => {
    e.PreventDefault();
    axios
      .post("https://reqres.in/api/users")
      .then((res) => setData([...data, res.data]));
    setForm(dummyForm);
    setError(hataErrors);

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.target.type === "checkbox"
      ? setForm({ ...form, terms: !form.terms })
      : setForm({ ...form, [name]: value });
    formCheck(name, value);
  };





  return (
    <div className="App">

    </div>
  );
}

export default App;
