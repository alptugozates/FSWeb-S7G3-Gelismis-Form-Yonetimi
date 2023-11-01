import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import axios from "axios";
import * as Yup from "yup"
import { useEffect, useState } from 'react';

const formSchema = Yup.object().shape({
  name: Yup.string().required("İsim, Soyisim alanının doldurulması zorunludur."),

  email: Yup.string
    .email("Lütfen geçerli bir email adresi giriniz.")
    .required("Email adresi boş bırakılamaz."),

  password: Yup.string
    .password(6, "Minimum 6 karakter içermesi zorunludur.")
    .required("Şifre alanı boş bırakılamaz."),

  terms: Yup.boolean().oneOf([true], "Kayıt sözleşmesini kabul etmeden işlem gerçekleştirilemez."),
});

const dummyForm = { name: "", email: "", password: "", terms: false };
const hataErrors = { name: "", email: "", password: "", terms: "" };
function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(dummyForm);
  const [error, setError] = useState(hataErrors);
  const [submitDisabled, setSubmitDisabled] = useState(false);

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

    Yup.reach((formSchema, name))
      .validate(value)
      .then(() => { setError({ ...error, [name]: "" }); })
      .catch((err) => { setError({ ...error, [name]: err.error[0] }); })

  };




  useEffect = (() => {
    formSchema.isValid(form).then((response) => setSubmitDisabled(response));
  }, [form])






  return (
    <div className="App">
      <Form handleChange={handleChange} handleSubmit={handleSubmit} submitDisabled={submitDisabled} user={form} />
    </div>
  );
}

export default App;
