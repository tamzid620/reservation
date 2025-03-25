
import mainIcon from '../../../assets/Icons/SkyScape-Logo.png'

const Navbar = () => {
    return (
        <nav style={{fontFamily : "Barlow, sans-serif "}} >
            <div className="lg:max-w-6xl md:max-w-3xl sm: w-full">
                {/* icon section  */}
                <div>
                    <div className="relative flex items-center">
                        <h1 className="relative text-2xl font-extrabold uppercase"
                        >SkyScape</h1>
                        <img src={mainIcon} alt="" className="w-[60px]" />
                        <p className="absolute top-8">explore the world</p>
                    </div>
                </div>
                {/* ul li section  */}
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
