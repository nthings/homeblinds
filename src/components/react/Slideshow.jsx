import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = (arg) => {
  const { images = [] } = arg || {};
  return (
    <Carousel showIndicators useKeyboardArrows={true}>
        {images.map((URL, index) => (
            <img src={URL} key={index} />
        ))}
    </Carousel>
  );
}
export default Slideshow;
