import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return (
    <>
    <div className="w-full h-30 px-2">
     <img className="w-full h-full rounded-lg" 
          src= {props.src}
          alt="Entertainment"/>
    </div>
    </>
    );
}

//Main component
const EntertainmentCardSlider = () => {
  
  const EntertainmentImage= [
    //Image links
  ];
  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow : 3,
                slidesToScroll : 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow : 3,
                slidesToScroll : 1,
                initialSlide : 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow : 2,
                slidesToScroll : 1
            }
        },
        {
            breakpoint: 300,
            settings: {
                slidesToShow : 1,
                slidesToScroll : 1
            }
        }
    ]
  };
    return(
    <>
     <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
            <EntertainmentCard src={image} key={index} />
            ))}
     </Slider>
    </>
  )
}
export default EntertainmentCardSlider;