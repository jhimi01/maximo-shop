
"use client"
import Slider from 'react-slick';
import Slide from './Slide';
import { marcellus, inter } from '../app/fonts'


const Hero = () => {

    const settings = {
        dots: true,
        infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: false,
        waitForAnimate: false,
        fade: true,

      };

      const slideData = [
        {
            id: 0,
            // img: "https://img.freepik.com/premium-photo/online-fashion-shopping-with-computer_23-2150400628.jpg",
            img: "/banner.png",
            titles: "Trending items",
            mainTitle: "Experience the Joy of Fashion",
            price: "$20",
        },
        {
            id: 1,
            // img: "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/hero.jpg",
            // img: "https://img.freepik.com/free-photo/woman-showing-her-new-buying-clothes-red-background-high-quality-photo_114579-22928.jpg",
            img: "/banner.png",
            titles: "Trending items",
            mainTitle: "WOMEN'S LATEST FASION SALE",
            price: "$60",
        },
        {
            id: 2,
            // img: "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/bg-03.jpg",
            // img: "https://img.freepik.com/free-photo/front-view-young-lady-flower-designed-pink-dress-holding-shopping-packages-smiling-blue_140725-24089.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=ais_hybrid",
            img: "/banner.png",
            titles: "Trending Accessories",
            mainTitle: "The new beauty collection",
            price: "$10",
        },
        {
            id: 3,
            // img: "https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/hero.jpg",
            // img: "https://img.freepik.com/free-photo/young-beautiful-girl-wearing-orange-t-shirt-holding-paper-bags-looking-camera-smiling-cheerfully-standing-isolated-orange-background_141793-24557.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=ais_user",
            img: "/banner.png",
            titles: "Sale offer",
            mainTitle: "The beauty collection that makes all the difference!",
            price: "$65",
        }
      ];



  return (
   <div className={marcellus.className}>
    <div className="w-full md:h-auto  md:object-left-bottom container  pt-6 lg:pt-0 "
        style={{ 
        //   backgroundImage: `url(/banner.png)`,
        //   backgroundAttachment: "fixed",
        //   height: "100vh" // You can adjust the height as needed
        }}>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide key={item.id} 
                img={item.img}
                title={item.titles}
                mainTitle={item.mainTitle}
                price={item.price}
                 />
            ))}
        </Slider>
    </div>
   </div>
  )
}

export default Hero
