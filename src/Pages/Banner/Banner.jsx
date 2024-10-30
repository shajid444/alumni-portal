import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3Dz" />
              
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D" />
           
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D" />
               
            </div>
        </Carousel>
    );
};

export default Banner;