import Banner from "../../Shared/UserShared/Banner/Banner";
import DiscoverWorld from "../../Shared/UserShared/DiscoverWorld/DiscoverWorld";
import PopularTours from "../../Shared/UserShared/PopularTours/PopularTours";
import TourCounter from "../../Shared/UserShared/TourCounter/TourCounter";


const Home = () => {
    return (
        <div>
           <Banner/>
           <DiscoverWorld/>
           <PopularTours/>
           <TourCounter/>
        </div>
    );
};

export default Home;