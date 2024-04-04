import { useState } from "react";
import Icon from "../../assets/icon.png";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    const [active, setActive] = useState(false);
    return (
        <div className='absolute z-10 top-0 w-full'>
            <div className="container mx-auto">
                <div className="flex items-center w-full gap-6">


                    <div className="flex w-full justify-between items-center gap-4">
                        <div className="icon mt-3">
                            <img src={Icon} alt="" />
                        </div>

                        <div className={`navlinks ${active && 'active'}`}>
                            <ul className='text-white flex justify-center items-center gap-6'>
                                <li className='link-item active relative cursor-pointer'>Home</li>
                                <li className='link-item relative cursor-pointer'>Admissions</li>
                                <li className='link-item relative cursor-pointer'>Corporate Training</li>
                                <li className='link-item relative cursor-pointer'>Program & Courses</li>
                                <li className='link-item relative cursor-pointer'>About US</li>
                                <li className='link-item relative cursor-pointer'>Blog</li>
                            </ul>
                        </div>

                        <div className="apply-btn">
                            <button className='outline-none text-orange bg-[white] font-medium px-4 py-1 rounded-lg transition-all hover:bg-orange hover:text-white'>Apply</button>
                        </div>

                    </div>

                    <div className="burgur hidden lg:block">
                        <RxHamburgerMenu onClick={() => setActive(!active)} className="text-white text-3xl cursor-pointer" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NavBar;
