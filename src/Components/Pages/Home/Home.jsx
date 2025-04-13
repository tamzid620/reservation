import Banner from "../../Shared/UserShared/Banner/Banner";
import DiscoverWorld from "../../Shared/UserShared/DiscoverWorld/DiscoverWorld";
import PopularDestination from "../../Shared/UserShared/PopularDestination/PopularDestination";
import PopularTours from "../../Shared/UserShared/PopularTours/PopularTours";
import TourCounter from "../../Shared/UserShared/TourCounter/TourCounter";
import TourCountries from "../../Shared/UserShared/TourCountries/TourCountries";
import TravelExperience from "../../Shared/UserShared/TravelExperience/TravelExperience";
import VideoCompo from "../../Shared/UserShared/VideoCompo/VideoCompo";


const Home = () => {
    return (
        <div>
           <Banner/>
           <DiscoverWorld/>
           <PopularTours/>
           <TourCounter/>
           <PopularDestination/>
           <VideoCompo/>
           <TourCountries/>
           <TravelExperience/>
        </div>
    );
};

export default Home;