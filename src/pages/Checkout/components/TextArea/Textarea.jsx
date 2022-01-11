import React from "react";
import { useForm } from "../../../../hooks/useForm";

import "./style.scss"
const TextArea = ({ label, value, helperText, ...ref }) => {
    // const { submit, handleArea } = useForm({})
    return (
        <form
            // onSubmit={submit}
            className="field__area">
            <div className="label">{label}</div>
            <textarea type="text" value={value} {...ref} />
            <p className="error-text">{helperText}</p>
            <button type="submit"
                // onClick={handleArea}
                className="">submit</button>
        </form>
    );
};

export default TextArea;
