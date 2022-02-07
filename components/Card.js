import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <Link href={`pokemon/${item.name}`}>
      <a className="w-[300px] h-[200px] bg-white flex flex-col items-center justify-center rounded-md border border-gray/30 p-4 group cursor-pointer">
        <Image
          src={`https://raw.githubusercontent.com/robert-z/simple-pokemon-json-api/master/public/images/${item.name}.jpg`}
          alt={item.name}
          height={150}
          width={150}
          className="object-contain group-hover:scale-105 duration-700"
        />
        <h2 className="text-lg font-bold text-black">{item.name}</h2>
      </a>
    </Link>
  );
};

export default Card;
