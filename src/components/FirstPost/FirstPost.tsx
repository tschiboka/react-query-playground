import { useForm } from "react-hook-form";
import Post from "../Post/Post";

let renderCount = 0;

const FirstPost = () => {
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
            <Post />
        </div>
    );
};

export default FirstPost;
