import Slider from "react-slick";
import Ellipse from "../../assets/Ellipse 34.png";
import Ellipse2 from "../../assets/elipse2.png";
import Bgleft from "../../assets/bgleft.png";
import Bgright from "../../assets/bgright.png";
import "./students.css";
import Campus from "./Campus";

const Students = () => {

    const settings = {
        arrows: false,
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "250px",
        slidesToShow: 2,
        speed: 500,
        dotsClass: 'slick-dots buttonbar',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "150px"
                }
            },
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px"
                }
            },

        ]
    };

    return (
        <>
            <div className="bg-left"><img src={Bgleft} alt="" /></div>
            <div className="bg-right"><img src={Bgright} alt="" /></div>
            <div className="py-10">
                <div className="flex flex-col justify-center items-center py-4">
                    <h2 className="text-[black] font-semibold text-[40px] leading-[50.28px] text-center">What Our Student’s Say</h2>
                    <p className="text-center text-[#8A8A8A] mt-4">L'ITTIQ ne forme pas seulement des experts en technologie, mais également les futurs leaders de <br /> l'industrie technologique</p>
                </div>


                <div className="slider-container">
                    <Slider {...settings}>

                        <div>
                            <Card para={"“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”"} Image={Ellipse2} name={"Clara R. Altman"} des={"UI&UX Design"} />
                        </div>

                        <div>
                            <Card para={"“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”"} Image={Ellipse2} name={"Clara R. Altman"} des={"UI&UX Design"} />
                        </div>
                        <div>
                            <Card para={"“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots”"} Image={Ellipse} name={"Dannette P. Cervantes"} des={"Web Design"} />
                        </div>
                        <div>
                            <Card para={"“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”"} Image={Ellipse2} name={"Clara R. Altman"} des={"UI&UX Design"} />
                        </div>
                    </Slider>
                </div>

                <div>
                    <Campus />
                </div>
            </div>
        </>
    );
};

export default Students;


const Card = ({ para, Image, name, des }) => {
    return (
        <div className="p-4 pe-1 mx-[12px] bg-white shadow-5xl my-4">
            <p className="text-[#1C1C1C] font-light text-base">
                {para}
            </p>

            <div className="flex gap-3 items-center mt-8">
                <img src={Image} alt="" />

                <div className="heading">
                    <h4 className="text-[black] text-base">{name}</h4>
                    <p className="text-[#8E8E8E] text-sm">{des}</p>
                </div>
            </div>
        </div>
    );
};