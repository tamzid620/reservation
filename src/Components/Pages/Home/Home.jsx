import Banner from "../../Shared/UserShared/Banner/Banner";
import DiscoverWorld from "../../Shared/UserShared/DiscoverWorld/DiscoverWorld";
import FooterContact from "../../Shared/UserShared/Footer/FooterContact";
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
           <FooterContact/>
        </div>
    );
};

export default Home;