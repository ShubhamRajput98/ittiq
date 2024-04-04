import Group from "../../assets/group (2).png";
import Call from "../../assets/Vector.png";

const Campus = () => {
    return (
        <div className='container mx-auto mt-28'>
            <div className="flex flex-wrap xl:justify-center gap-[3em]">
                <div className="image relative">
                    <img src={Group} alt="" />
                    <h3 className="absolute font-semibold right-[-50px] bottom-0 bg-black ps-10 py-9 text-[39px] text-[#EEF1F6] w-[353px] sm:text-4xl sm:right-[-65px]">From <br /> Unemployable <br />
                        to a skill worker </h3>
                </div>

                <div className="content flex flex-wrap items-center ps-4">
                    <div>
                        <div className="heading">
                            <h4 className="text-orange font-semibold mb-2">High rated</h4>
                            <h2 className="text-black text-[60.98px] sm:text[50px] font-semibold">Student Campus <br className="sm:hidden" />
                                Life
                            </h2>

                            <h3 className="text-[24px] font-semibold">BE AMBITIOUS. BE VULNERABLE. BE YOU</h3>

                            <p className="my-4 text-[#797C7F] font-light">In addition to its training programs, ITTIQ offers a rich and varied social <br /> experience and other support systems where you’ll find outlets for creative <br /> expression and be your true self.</p>
                        </div>

                        <div className="flex sm:flex-wrap justify-between items-center mt-[4.5em] gap-8 xl:mt-4">
                            <button className="outline-0 border-0 bg-orange text-[white] font-medium py-[12px] px-[64px] rounded-xl shadow-6xl hover:font-semibold hover:bg-white hover:text-orange hover:border transition-all">How We Work</button>

                            <div className="flex items-center gap-10">
                                <img src={Call} alt="" />
                                <p className="text-[#010305] text-[20px] font-semibold pe-3">+229-54335532</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campus;
