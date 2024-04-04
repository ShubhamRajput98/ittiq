import React from "react";
import Slider from "react-slick";
import Man from "../../assets/Man.png";
import Kid from "../../assets/Kid.jpg";
import Girl from "../../assets/girl.jpg";
import Girl2 from "../../assets/girl2.jpg";
import Pumkin from "../../assets/pumkin.jpg";
import Man2 from "../../assets/man2.jpg";
import "./pagination.css";

const Pagination = () => {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <div className="relative">
            <Slider {...settings}>
                <SliderComponent Image={Man} />
                <SliderComponent Image={Kid} />
                <SliderComponent Image={Girl} />
                <SliderComponent Image={Girl2} />
                <SliderComponent Image={Pumkin} />
                <SliderComponent Image={Man2} />
            </Slider>
        </div>
    );
};

export default Pagination;



const SliderComponent = ({ Image }) => {
    return (
        <div className="slider-item relative">
            <div className="slider-content px-3">
                {/* slider content */}
                <div className="content-heading text-center">
                    <h1><span className="text-white">Améliorez <span className="text-orange">Vos</span></span> <br className="sm:hidden" /> <span className="text-orange">Compétences</span> <span className="text-white">Pour Faire</span> <br className="sm:hidden" /> <span className="text-white">Progresser Votre</span> <span className="text-orange">Carrière</span></h1>
                </div>

                <div className="content-para my-10">
                    <p className="text-white text-center text-xs tracking-wider leading-[26.8px]"> Nous nous engageons à fournir une éducation technologique à la prochaine <br className="sm:hidden" /> génération <br className="sm:hidden" />
                        de leaders au Bénin, en promouvant l'égalité et l'autonomisation.</p>
                </div>

                <div className="content-button flex flex-wrap justify-center items-center gap-4">
                    <button className="browse text-sm outline-none border rounded-lg  w-[120px] h-[38px] text-[white] font-extralight tracking-widest transition-all hover:text-orange hover:font-medium">Apply Now</button>
                    <button className="browse text-sm outline-none rounded-lg w-[180px] h-[40px] text-[white] font-extralight bg-orange tracking-widest transition-all hover:bg-transparent hover:text-orange hover:font-medium">Browse Courses</button>
                </div>
            </div>
            {/* slider image */}
            <img className="slider-image h-full w-full" src={Image} alt="" />
        </div>
    );
};
