import {useSearchParams } from "react-router-dom";

const Home = () => {

    const [searchParams, setSearchParams] =  useSearchParams();
    const query = searchParams.get("sort");
    return (
        <div>
            {query}<br/>
            home페이지 입니다.
        </div>
    );
};
export default Home; 