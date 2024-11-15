import { Helmet } from "react-helmet-async";
import Alumni from "../Alumni/Alumni";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import News from "../News/News";
import Review from "../Review/Review";


const Home2 = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Alumni></Alumni>
            <News></News>
            <Review></Review>
        </div>
    );
};

export default Home2;