import { Helmet } from "react-helmet-async";
import Alumni from "../Alumni/Alumni";



import Banner2 from "../Banner2/Banner2";
import MedalTable from "../../Pages2/MedalTable/MedalTable";
import HighlightsSection from "../../Pages2/HighlightsSection/HighlightsSection";
import ParisHighlightSection from './../../Pages2/ParisHighlightSection/ParisHighlightSection';
import TopStories from "../../Pages2/TopStories/TopStories";
import GamesShop from "../../Pages2/GamesShop/GamesShop";
import Faq from "../../Pages2/Faq/Faq";
import FreeSeries from "../../Pages2/FreeSeries/FreeSeries";
import DiscoverParalympics from "../../Pages2/DiscoverParalympics/DiscoverParalympics";
import AboutGames from "../../Pages2/AboutGames/AboutGames";
import Review from "../Review/Review";
import Review2 from "../Review/Review2";


const Home2 = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <div className="">
                <Banner2></Banner2>

            </div>

            <div className="mt-10">
                <MedalTable></MedalTable>
            </div>

            <div className="mt-10">
                <HighlightsSection></HighlightsSection>
            </div>
            <div className="mt-10">
                <ParisHighlightSection></ParisHighlightSection>
            </div>

            <div className="mt-10">
                <TopStories></TopStories>
            </div>
            <div className="mt-10">
                <GamesShop></GamesShop>
            </div>

            <div className="mt-10">
                <FreeSeries></FreeSeries>
            </div >
            <div className="mt-10">
                <DiscoverParalympics></DiscoverParalympics>
            </div>

            <div className="mt-10">
                <AboutGames></AboutGames>
            </div>

            <div className="mt-10">
                <Review2></Review2>
            </div>
       

        <div className="mt-10">
            <Faq></Faq>
        </div>

        </div>
    );
};

export default Home2;