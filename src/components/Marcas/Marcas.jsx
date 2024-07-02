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
                width="200"
                height="48"
              />
            </div>
            <div className="max-h-12 w-full mt-.5 flex items-center justify-center ">
              <img 
                src="https://static2.aastatic.com.ar/files/variants/150/b4725f99985b45679b410521a4fd40bc.jpg" 
                alt="Tuple" 
                className="object-contain rounded-lg"
                width="50"
                height="50"
              />
            </div>
            <div className="max-h-12 mt-[-1rem] w-full flex items-center justify-center">
              <img 
                src="https://iconape.com/wp-content/files/uj/197604/png/197604.png" 
                alt="SavvyCal" 
                className="object-contain"
                width="80"
                height="80"
              />
            </div>
            <div className="max-h-12 w-full mt-[-1.5rem] flex items-center justify-center">
              <img 
                src="https://www.exportadoresdecordoba.com/images_db/logos/220px/24233_logo.jpg" 
                alt="Statamic" 
                className="object-contain"
                width="100"
                height="100"
              />
            </div>
          </Slider>
        </div>
  </div>
</div>
   
  )
}
