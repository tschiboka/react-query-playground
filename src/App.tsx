import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useForm } from "react-hook-form";
import "./App.css";

let renderCount = 0;

function App() {
    renderCount++;

    const {
        register,
        handleSubmit,
        formState: { errors }, // Subscribe to Error Handling
    } = useForm({
        defaultValues: {
            // Optionally Provide a Default Value Object
            firstName: "John",
            lastName: "Doe",
        },
    });

    console.log(errors);

    return (
        <div>
            <p>{renderCount}</p>

            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                })}
            >
                <input
                    type="text"
                    {...register("firstName", {
                        required: "First Name is Required",
                        minLength: {
                            value: 3,
                            message:
                                "First Name Must be Minimum 3 Characters Long",
                        },
                    })}
                    placeholder="First Name"
                />
                {errors?.firstName?.message && (
                    <p>{errors?.firstName?.message}</p>
                )}
                <input
                    type="text"
                    {...register("lastName", {
                        required: "Last Name is Required",
                        minLength: {
                            value: 3,
                            message:
                                "First Name Must be Minimum 3 Characters Long",
                        },
                    })}
                    placeholder="Last Name"
                />
                {errors?.lastName?.message && (
                    <p>{errors?.lastName?.message}</p>
                )}
                <input type="submit" />
            </form>
        </div>
    );
}

export default App;
