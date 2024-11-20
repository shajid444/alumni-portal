import { Helmet } from "react-helmet-async";
import Alumni from "../Alumni/Alumni";
import Banner from "../Banner/Banner";
// import Catagory from "../Catagory/Catagory";
import News from "../News/News";
import Review from "../Review/Review";
import Stories from "../Stories/Stories";


const Home2 = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="">
                <Banner></Banner>

            </div>

            <div className="">
                <Stories></Stories>

            </div>

            <div>
                <Alumni></Alumni>

            </div>
          


            <div>
                <News></News>

            </div>
            <div>
                <Review></Review>

            </div>





        </div>
    );
};

export default Home2;