interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div  style={{ 
      // backgroundImage: `url(https://websitedemos.net/be-bold-beauty-store-04/wp-content/uploads/sites/1117/2022/08/hero.jpg)`,
      backgroundImage: `url(${img})`,
      // backgroundAttachment: "fixed",
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}  className='outline-none border-none relative'>
      <div>
        <div className="absolute left-[30px] md:left-[70px] max-w-[650px] top-[50%] -translate-y-[50%]  sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h3 className='text-accent text-[20px] lg:text-[28px]'>{title}</h3>
          <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[60px] leading-[1.1] font-bold">
            {mainTitle}
          </h2>
          <h3 className="text-[24px] text-gray-500">
            starting at{" "} 
            <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>.00
          </h3>
          <div className="bg-accent text-white inline-block cursor-pointer hover:bg-blackish p-2 px-4 text-[14px] md:text-[16px] mt-4">
            Shop Now
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide;
