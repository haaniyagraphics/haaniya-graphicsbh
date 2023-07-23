import Header from "./components/Header/header";
import Slider from "./components/Slider/slider";
import Services from "./components/Services/service";
import About from "./components/About/about";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/footer";
import Works from "./components/Works/works";

function App() {

  return (
    <div className="App">
        <Header />
        <Slider />
        <Services />
        <About />
        <Testimonial />
        <Footer />
    </div>

  );
}

export default App;
