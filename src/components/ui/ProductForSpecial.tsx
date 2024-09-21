import stars from "../../assets/Vector.png";

import { FaRegHeart } from "react-icons/fa";

const ProductForSpecial = ({}: {}) => {
  return (
    <div className="relative p-3 min-w-[220px] bg-white rounded-lg">
      <span className="cursor-pointer absolute top-5 right-5 w-[35px] h-[35px] border rounded-full flex items-center justify-center">
        <FaRegHeart className="text-xl" />
      </span>
      <img
        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        alt=""
        className="rounded-lg w-full min-h-[200px] object-cover"
      />
      <p className="font-semibold text-sm">
        Iphone 14 Pro Max 16GB + 2T Deep Purple
      </p>
      <div className="mt-1">
        <p className="font-bold text-lg">
          15 580 000 <span className="font-semibold">sum</span>
        </p>
      </div>
      <div className="flex items-center gap-1">
        <img src={stars} alt="" className="w-[10px]" />
        <img src={stars} alt="" className="w-[10px]" />
        <img src={stars} alt="" className="w-[10px]" />
        <img src={stars} alt="" className="w-[10px]" />
        <img src={stars} alt="" className="w-[10px]" />
        <span className="ml-3 font-semibold">3.5</span>
      </div>
      <div className="flex flex-col text-sm mt-1">
        <span>1,256 bought</span>
        <span>942 reviews</span>
      </div>
    </div>
  );
};

export default ProductForSpecial;
