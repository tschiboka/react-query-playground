import { useForm } from "react-hook-form"

export default function NewPost() {
    const {register, handleSubmit} = useForm()
    const submitHandler = (e:React.FormEvent) => {
        e.preventDefault()
        console.log("HERE")
        handleSubmit((data) => console.log("There", data))
    }

    return <form onSubmit={submitHandler}>
        <h1>Create Post</h1>
        <input type="text" {...register("title")} placeholder="Title" />
        <input type="text" {...register("body")} placeholder="Body" />
        <input type="submit" />
    </form>
}