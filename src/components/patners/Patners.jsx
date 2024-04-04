
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./patners.css";
// import required modules
import { Pagination } from 'swiper/modules';


import Aquafina from "../../assets/aquafina.png";
import Fizzy from "../../assets/fizzy.png";
import Unicorn from "../../assets/unicorn.png";
import Cat from "../../assets/cat.png";


const Patners = () => {

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center py-4">
                <h2 className="text-white font-semibold text-[40px]">Our Partners</h2>
            </div>

            <div className=" flex justify-center items-center">
                <div className="w-[80%]">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slides
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><Images Image={Aquafina} /></SwiperSlide>
                        <SwiperSlide><Images Image={Fizzy} /></SwiperSlide>
                        <SwiperSlide><Images Image={Unicorn} /></SwiperSlide>
                        <SwiperSlide><Images Image={Cat} /></SwiperSlide>
                        <SwiperSlide><Images Image={Aquafina} /></SwiperSlide>
                        <SwiperSlide><Images Image={Fizzy} /></SwiperSlide>
                        <SwiperSlide><Images Image={Unicorn} /></SwiperSlide>
                        <SwiperSlide><Images Image={Cat} /></SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Patners;



const Images = ({ Image }) => {
    return (
        <div className="image h-[135px] flex justify-center items-center">
            <img src={Image} alt="" />
        </div>
    );
};
