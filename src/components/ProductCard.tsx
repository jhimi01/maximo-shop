import Image from "next/image";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { marcellus } from "../app/fonts";

interface propsType {
  img: string;
  title: string;
  desc: string;
  ratings: number;
  price: number;
}

const myStyles = {
  itemShapes: ThinStar,
  itemStrokeWidth: 1,
  activeFillColor: "#d3ced2",
  activeStrokeColor: "#333",
  inactiveStrokeColor: "#333",
};

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  ratings,
  price,
}) => {
  // Format the prices to two decimal places
  const discountedPrice = (price + 45.00).toFixed(2);
  const formattedPrice = price.toFixed(2);

  return (
    <div>
      <div
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="px-4 rounded-xl h-[300px] flex items-center justify-center my-4 cursor-pointer  md:max-w-[270px] hover:shadow-none"
      >
        <div>
          <Image
            className="w-full h-auto hover:grayscale"
            src={img}
            width={200}
            height={300}
            alt={title}
          />
        </div>
      </div>
      <div className="p-3 md:text-start text-center">
        <Rating
          style={{ maxWidth: 90 }}
          value={ratings}
          itemStyles={myStyles}
          readOnly
          className="mx-auto md:mx-0"
        />
        <h2 className={`text-xl text-blackish ${marcellus.className}`}>
          {title}
        </h2>
        <p className="text-gray-800">
          <del className="text-[#999]">${discountedPrice}</del> &nbsp;
          <b>${formattedPrice}</b>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
