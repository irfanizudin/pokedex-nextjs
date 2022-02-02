import Tag from "./Tag";

const Card = () => {
  return (
    <div className="w-[233px] h-[295px] bg-white flex flex-col items-center justify-center rounded-md cursor-pointer">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
        className="w-[148px] aspect-square object-contain"
      />
      <h2 className="text-lg font-bold">Bulbasaur</h2>
      <div className="flex flex-wrap justify-center items-center space-x-2 mt-4">
        <Tag className="bg-green-2">grass</Tag>
        <Tag className="bg-red">poison</Tag>
      </div>
    </div>
  );
};

export default Card;
