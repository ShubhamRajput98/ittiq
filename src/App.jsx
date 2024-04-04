import CareerPath from "./components/careerPath/CareerPath";
import Delever from "./components/delever/Delever";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Pagination from "./components/pagination/Pagination";
import Patners from "./components/patners/Patners";
import Students from "./components/students/Students";

const App = () => {
  return (
    <>
      <section className="relative">
        <NavBar />
        <Pagination />
      </section>

      <section className="relative linear linear-white">
        <CareerPath />
      </section>

      <section className="relative">
        <div className="overlay"></div>
        <Delever />
      </section>


      <section className="bg-darkblack border-t-2 border-b-2 border-orange">
        <Patners />
      </section>


      <section className="relative overflow-hidden">
        <Students />
      </section>

      <footer className="bg-darkblack">
        <Footer />
      </footer>
    </>
  );
};

export default App;
