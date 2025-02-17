import React from "react";
import { Form } from "react-bootstrap";


const FormInput = ({ handleSubmit, handleChange, submitDisabled, user, errors }) => {








    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>

            <label htmlFor="name-input">İsim Soyisim:</label>
            <input id="name-input" type="text" name="name" onChange={handleChange} value={user.name} />
            <Form.Control.Feedback type="invalid" id="name-validation" >
                {errors.name}
            </Form.Control.Feedback>


            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" name="email" onChange={handleChange} value={user.email} />
            <Form.Control.Feedback type="invalid" id="email-validation" >
                {errors.email}
            </Form.Control.Feedback>


            <label htmlFor="password">Şifre:</label>
            <input id="password" type="password" name="password" onChange={handleChange} value={user.password} />
            <Form.Control.Feedback type="invalid" id="password-validation">
                {errors.password}
            </Form.Control.Feedback>


            <label htmlFor="terms">Kayıt sözleşmesini kabul ediyorum.</label>
            <input id="terms" type="checkbox" name="terms" checked={user.terms} onChange={handleChange} value={!user.terms} />
            <Form.Control.Feedback type="invalid" id="terms-validation">
                {errors.terms}
            </Form.Control.Feedback>


            <input type="submit" value="Kayıt ol" disabled={!submitDisabled} />
        </form>


    )


}

export default FormInput;