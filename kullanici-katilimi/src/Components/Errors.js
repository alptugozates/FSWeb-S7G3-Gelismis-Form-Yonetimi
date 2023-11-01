import { object } from "yup"

const Errors = ({ errors }) => {
    const errorArray = Object.values(errors);

    return (
        <div>
            <h2>Errors:</h2>
            <ul>
                {errorArray.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
};
export default Errors;