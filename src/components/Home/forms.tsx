import FirstPost from "../FirstPost/FirstPost";
import Post from "../Post/Post";
import SampleForm_1 from "../SampleForm_1/SampleForm_1";

interface FormList {
    name: string;
    element: React.ReactElement;
}

const formList: FormList[] = [
    { name: "sample-form-1", element: <SampleForm_1 /> },
    { name: "first-post", element: <FirstPost /> },
];

export default formList;
