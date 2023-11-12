import FirstPost from "../FirstPost/FirstPost";
import RenderCounter from "../FirstPost/RenderCounter/RenderCounter";
import SampleForm_1 from "../SampleForm_1/SampleForm_1";
import SearchWithId from "../SearchWithId/SearchWithId";

interface FormList {
    name: string;
    element: React.ReactElement;
}

const formList: FormList[] = [
    { name: "sample-form-1", element: <SampleForm_1 /> },
    { name: "first-post", element: <FirstPost /> },
    { name: "render-counter", element: <RenderCounter /> },
    { name: "search-with-id", element: <SearchWithId />}
];

export default formList;
