import React from "react";


const Form = ({ handleSubmit, handleChange, submitDisable, user }) => {








    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <label htmlFor="name">İsim Soyisim:
                <input id="name" type="text" name="name" onChange={handleChange} value={user.name} />
            </label>

            <label htmlFor="email">E-mail:
                <input id="email" type="email" name="email" onChange={handleChange} value={user.email} />
            </label>
            <label htmlFor="email">Şifre:
                <input id="password" type="password" name="password" onChange={handleChange} value={user.password} />
            </label>
            <label htmlFor="terms">Kayıt sözleşmesini kabul ediyorum.
                <input id="terms" type="checkbox" name="terms" checked={!user.terms} onChange={handleChange} value={user.terms} />
            </label>

            <button type="submit" value="Kaydet" disabled={!submitDisable} >Kayıt ol</button>
        </form>


    )


}

export default Form;