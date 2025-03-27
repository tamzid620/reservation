
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/UserShared/Navbar/Navbar';
import Footer from '../Shared/UserShared/Footer/Footer';

const Layout = () => {

// const location = useLocation();
// const noHeaderFooter =
//  location.pathname.includes('') ||
//  location.pathname.includes('') 

    return (
        <div>
        {/* { noHeaderFooter || <Navbar/> }
        <Outlet/>
        { noHeaderFooter || <Footer/> } */}
         <Navbar /> 
        <Outlet/>
        <Footer /> 
        </div>
    );
};

export default Layout;