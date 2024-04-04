import ReadMore from "./ReadMore";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

import Image1 from "../../assets/image 7.png";
import Clock from "../../assets/clock.png";
import Camara from "../../assets/camara.png";
import Download from "../../assets/download.png";
import "./delever.css";


const Delever = () => {
    const options = {
        loop: true,
        nav: true,
        navText: ["<div class='custom-arrow prev-arrow'></div>", "<div class='custom-arrow next-arrow'></div>"],
        items: 1,
        margin: 40,
        autoplay: false,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            980: {
                items: 1,
                margin: 0,
            },
            1024: {
                items: 2
            },
            1140: {
                items: 3
            },
        }
    };

    return (
        <div className="container mx-auto pt-20">
            <div className="flex justify-between items-center lg:justify-center lg:flex-wrap">
                <div className="heading lg:w-full">
                    <h3 className="text-orange text-xl font-semibold">
                        ITTIQ helps you design,
                    </h3>
                    <h2 className="text-black text-[32.5px] leading-[38px] font-semibold">Deliver, Manage, and Sustain <br /> Talent Development Solutions
                    </h2>

                    <h4 className="font-semibold text-[20.5px]"> for today and the future</h4>
                </div>

                <div className="flex h-full justify-center items-cent w-1/2 lg:w-full lg:mt-4">

                    <ReadMore text={
                        "Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals Our team of experts brings a wealth of experience and knowledge to every client engagement, ensuring that we understand your unique needs and challenges. We work with you to develop customized talent solutions that align with your business strategy, culture, and goals"
                    } />
                </div>
            </div>



            <div className="mt-10">
                <OwlCarousel className="owl-carousel owl-theme" {...options}>
                    <div><Card Image={Image1} Clock={Clock} Camara={Camara} Download={Download} /></div>
                    <div><Card Image={Image1} Clock={Clock} Camara={Camara} Download={Download} /></div>
                    <div><Card Image={Image1} Clock={Clock} Camara={Camara} Download={Download} /></div>
                    <div><Card Image={Image1} Clock={Clock} Camara={Camara} Download={Download} /></div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Delever;



const Card = ({ Image, Clock, Camara, Download }) => {
    return (
        <div className="card-containt w-full">
            <div className='shadow-4xl rounded-[10px] overflow-hidden bg-white'>
                <div className="image">
                    <img className="w-full h-[276px]" src={Image} alt="" />
                </div>
                <div className="py-2 ps-[12px]  pb-4 border-b">
                    <p className='text-lightgrey font-light'>UI/UX Design</p>
                    <h3 className='text-xl font-medium'>UI/UX Design for Beginners
                    </h3>
                </div>

                <div className="px-[12px] py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "16.55px", width: "16.55px" }} className='h-[13px] w-[13px]' src={Clock} alt="" />
                            <span className='text-sm font-light text-grey'>22hr 30min</span>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "13.55px", width: "16.55px" }} className='h-[13px] w-[17px]' src={Camara} alt="" />
                            <span className='text-sm font-light text-grey'>34 Courses</span>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "16.55px", width: "16.55px" }} className='h-[13px] w-[17px]' src={Download} alt="" />
                            <span className='text-sm font-light text-grey'>250 Sales</span>
                        </div>
                    </div>

                    <div className="button mt-4">
                        <button className='bg-orange border-none text-[white] text-base font-normal rounded-xl w-full text-center py-2 hover:bg-[white] hover:text-orange hover:outline hover:outline-1 hover:outline-orange transition-all'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};