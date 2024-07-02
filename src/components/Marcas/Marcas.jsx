import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export const Marcas = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 9000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // La velocidad de autoplay se establece en 0 para evitar cualquier pausa
    cssEase: 'linear', // Utiliza una transición lineal para un desplazamiento continuo
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 50,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (

        <div className="bg-white py-24 ">
  <div className=" mx-auto max-w-5xl px-6 lg:px-8">
    <h2 className="text-center text-3xl font-bold leading-8 text-gray-900">Somos los principales distribuidores de las mejores marcas.</h2>
    <div className="mx-auto mt-10">
          <Slider {...settings}>
            <div className="  flex items-center justify-center">
              <img 
                src="https://seeklogo.com/images/Z/Zanello-logo-485E852800-seeklogo.com.png" 
                alt="Transistor" 
                className="w-16 rounded-lg object-contain"
                width="158"
                height="48"
              />
            </div>
            <div className="max-h-12 w-full flex items-center justify-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsPNhjGLJ5IS5iE-0DktbSx9brlgQg5X1Tw&s" 
                alt="Reform" 
                className="w-14 rounded-xl  object-contain"
                width="158"
                height="48"
              />
            </div>
            <div className="max-h-12 w-full flex items-center justify-center">
              <img 
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" 
                alt="Tuple" 
                className="object-contain"
                width="158"
                height="48"
              />
            </div>
            <div className="max-h-12 w-full flex items-center justify-center">
              <img 
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" 
                alt="SavvyCal" 
                className="object-contain"
                width="158"
                height="48"
              />
            </div>
            <div className="max-h-12 w-full flex items-center justify-center">
              <img 
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" 
                alt="Statamic" 
                className="object-contain"
                width="158"
                height="48"
              />
            </div>
          </Slider>
        </div>
  </div>
</div>
   
  )
}
