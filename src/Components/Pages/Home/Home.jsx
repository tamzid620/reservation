import Banner from "../../Shared/UserShared/Banner/Banner";
import DiscoverWorld from "../../Shared/UserShared/DiscoverWorld/DiscoverWorld";
import PopularDestination from "../../Shared/UserShared/PopularDestination/PopularDestination";
import PopularTours from "../../Shared/UserShared/PopularTours/PopularTours";
import TourCounter from "../../Shared/UserShared/TourCounter/TourCounter";


const Home = () => {
    return (
        <div>
           <Banner/>
           <DiscoverWorld/>
           <PopularTours/>
           <TourCounter/>
           <PopularDestination/>
        </div>
    );
};

export default Home;