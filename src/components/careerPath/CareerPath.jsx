
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import "./Careerpath.css";
import Clock from "../../assets/clock.png";
import Camara from "../../assets/camara.png";
import Download from "../../assets/download.png";


const CareerPath = () => {
    const options = {
        loop: true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        center: true,
        items: 1,
        margin: 80,
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
        <div className="container mx-auto py-12 relative ">

            <div className="round">
                <div className="round1">
                    <div className="round2">
                        <div className="round3">
                            <div className="round4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roundtwo">
                {/* <div className="round1"> */}
                <div className="round2">
                    <div className="round3">
                        <div className="round4"></div>
                    </div>
                </div>
                {/* </div> */}
            </div>


            <div className="heading">
                <h3 className="text-center text-4xl font-semibold text-darkblack leading-[50.28px]">Choose  Your Career Path</h3>
                <p className="text-base font-light leading-[26.8px] text-center">Nous nous engageons à fournir une éducation technologique à la prochaine génération de leaders au Bénin, en <br className='lg:hidden' /> promouvant l'égalité et l'autonomisation</p>
            </div>



            <div className="mt-6">
                <OwlCarousel className="owl-carousel owl-theme" {...options}>

                    <div>
                        <Card Image={Image2} Clock={Clock} Camara={Camara} Download={Download} />
                    </div>
                    <div>
                        <Card Image={Image3} Clock={Clock} Camara={Camara} Download={Download} />
                    </div>
                    <div>
                        <Card Image={Image1} Clock={Clock} Camara={Camara} Download={Download} />
                    </div>

                </OwlCarousel>

                <div className="flex justify-center items-center">
                    <button style={{ zIndex: "4" }} className='bg-[black] text-[white] py-1 px-4 rounded-lg hover:outline hover:outline-1 hover:outline-black hover:bg-white hover:text-black transition-all'>View All</button>
                </div>
            </div>



        </div>
    );
};

export default CareerPath;




const Card = ({ Image, Clock, Camara, Download }) => {
    return (
        <div className="card-containt  ">
            <div className='shadow-3xl rounded-[25px] bg-white'>
                <div className="image">
                    <img className="w-full h-[276px]" src={Image} alt="" />
                </div>
                <div className="py-2 ps-3 pe-22 pb-4 border-b">
                    <h3 className='text-2xl font-semibold'>Finance fundamentals
                        course
                    </h3>
                    <p className='text-lightgrey font-light'>By Kelly Anderson</p>
                </div>

                <div className="px-[12px] py-3">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "16.55px", width: "16.55px" }} className='h-[16.55px] w-[16.55px]' src={Clock} alt="" />
                            <span className='text-sm font-light text-grey'>22hr 30min</span>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "13.55px", width: "16.55px" }} className='h-[16.55px] w-[16.55px]' src={Camara} alt="" />
                            <span className='text-sm font-light text-grey'>34 Courses</span>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <img style={{ height: "16.55px", width: "16.55px" }} className='h-[16.55px] w-[16.55px]' src={Download} alt="" />
                            <span className='text-sm font-light text-grey'>250 Sales</span>
                        </div>
                    </div>

                    <div className="button mt-4">
                        <button className='bg-orange text-[white] text-base font-normal rounded-xl w-full text-center py-2 hover:bg-[white] hover:text-orange hover:outline hover:outline-1 hover:outline-orangetransition-all'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
