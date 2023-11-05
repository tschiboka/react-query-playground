import { QueryClient, QueryClientProvider } from "react-query";
import { useForm } from "react-hook-form";
import Post from "./components/post/post";
import SampleForm1 from "./components/SampleForm_1/SampleForm_1";
import "./App.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Post />
            <SampleForm1 />
        </QueryClientProvider>
    );
}

export default App;
