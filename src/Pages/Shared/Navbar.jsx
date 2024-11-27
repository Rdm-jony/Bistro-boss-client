import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = <>
        <NavLink><li>Home</li></NavLink>
        <NavLink to='/menu'><li>Our Menu</li></NavLink>
        <NavLink to='/Shop'><li>Our Shop</li></NavLink>
    </>
    return (
        <div className="navbar bg-black bg-opacity-30 fixed z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-5">
                        {navItems}
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl">BISTRO BOSS</p>
                    <p className="tracking-widest leading-3">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-5 menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/signIn'>                <button className="btn btn-sm">SignIn</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;