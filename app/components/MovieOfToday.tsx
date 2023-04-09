import Image from "next/image";
import movieImg from "../assets/blackadam.jpg";

const MovieOfToday = () => {
  return (
    <div className="h-32 w-full md:h-64">
      <Image
        src={movieImg}
        width={1000}
        height={1000}
        alt=""
        className="aspect-square h-full w-full"
      />
    </div>
  );
};

export default MovieOfToday;
