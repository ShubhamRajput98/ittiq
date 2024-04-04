import React from 'react';
import Icon from "../../assets/icon.png";
import Phone from "../../assets/Group 460.png";
import Mail from "../../assets/Group 461.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <div className='container mx-auto py-3'>
            <div className="flex md:flex-wrap md:gap-4 justify-between items-center pb-4 border-b-[0.5px] border-b-[#DCE0E8]lg:flex-wrap">
                <img src={Icon} alt="" />

                <ul className="flex lg:flex-wrap items-center gap-[4.6em] lg:gap-5 md:w-full md:justify-center">
                    <li className='font-semibold text-xs text-[white]'>Quick Links</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>Home</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>Admission</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>Program Courses</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>FAQ</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>Blog</li>
                    <li className='font-light text-xs text-[white] cursor-pointer hover:text-orange'>Careers</li>
                </ul>
            </div>

            <div className="flex flex-wrap gap-4 justify-between items-center py-8 gap-1em">
                <p className='text-[#CFCFCF]'>Canada <br />
                    Chemin D’aigremont <br />
                    Lorraine Quebec <br />
                    Republic Of Benin - Lot 29 <br />
                    PK Cotonou
                </p>

                <div className="flex items-center gap-3">
                    <img src={Phone} alt="" />
                    <span className='text-white'>P+229-54335532</span>
                </div>

                <div className="flex items-center gap-3">
                    <img src={Mail} alt="" />
                    <span className='text-white'>P+229-54335532</span>
                </div>

                <div className="flex flex-col items-end self-start">
                    <span className='text-white mb-2'>Subscribe</span>
                    <div className="relative">
                        <input type="text" className='border-0 outline-0 rounded-3xl w-[298px] h-[34px] ps-2 pe-[6.5em]' />
                        <button className='absolute text-xs bg-orange rounded-3xl h-[30px] px-6 text-[white] font-semibold top-1/2 right-[2px] translate-y-[-50%]'>Subscribe</button>
                    </div>
                </div>
            </div>


            <div className="flex justify-between items-center flex-wrap lg:gap-4">
                <div className="flex gap-[6em] flex-wrap items-center lg:gap-[3em] gap-1em">
                    <p className='text-[#CFCFCF]'>loremipsum© 2023. All Rights Reserved.</p>
                    <div className="flex flex-wrap items-center gap-[4em] sm:gap-4">
                        <p className='text-white text-sm font-normal cursor-pointer'>Privacy Policy</p>
                        <p className='text-white text-sm font-normal cursor-pointer'>Terms & Condition</p>
                        <p className='text-white text-sm font-normal cursor-pointer'>Site Map</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <span className='h-[34px] w-[34px] cursor-pointer rounded-full bg-[white] flex justify-center items-center hover:bg-orange hover:text-white'><TiSocialFacebook />
                    </span>
                    <span className='h-[34px] w-[34px] cursor-pointer rounded-full bg-[white] flex justify-center items-center hover:bg-orange hover:text-white'><TiSocialTwitter />
                    </span>
                    <span className='h-[34px] w-[34px] cursor-pointer rounded-full bg-[white] flex justify-center items-center hover:bg-orange hover:text-white'><RxInstagramLogo />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
