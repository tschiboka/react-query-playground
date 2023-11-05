import { useState } from "react";
import formList from "./forms";
import "./home.scss";

const Home = () => {
    const [currentForm, setCurrentForm] = useState<string | undefined>();
    const handleClick = (name: string) => {
        setCurrentForm(name);
    };

    const getFormElement = (formName: string) => {
        const form = formList.filter((form) => form.name === formName);
        if (form.length) return form[0].element;
    };

    return (
        <div className="Home">
            <div className="button-list">
                {formList.map(({ name }) => (
                    <button
                        key={name}
                        className={name === currentForm ? "active" : ""}
                        onClick={() => handleClick(name)}
                    >
                        {name}
                    </button>
                ))}
            </div>

            <div className="form-display">
                {currentForm && getFormElement(currentForm)}
            </div>
        </div>
    );
};

export default Home;
