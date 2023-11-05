import { useState } from "react";
import formList from "./forms";
import "./home.scss";

const Home = () => {
    const [currentForm, setCurrentForm] = useState<string | undefined>();
    const handleClick = (name: string) => {
        setCurrentForm(name);
    };

    const getFormElement = (formName: string) =>
        formList.map((form) => form.name === formName && form.element);

    console.log(currentForm);
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
