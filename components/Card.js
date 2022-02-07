import Image from "next/image";

const Card = () => {
  return (
    <div className="w-[314px] h-[200px] bg-white flex flex-col items-center justify-center rounded-md border border-gray/30 p-4 group cursor-pointer">
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
        height={150}
        width={150}
        className="object-contain group-hover:scale-105 duration-700"
      />
      <h2 className="text-lg font-bold text-black">Bulbasaur</h2>
    </div>
  );
};

export default Card;
