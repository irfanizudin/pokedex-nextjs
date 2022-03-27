import Image from "next/image";
import Link from "next/link";
import Layout from "./../../components/Layout";

const DetailPage = ({ items }) => {
  return (
    <Layout
      title={`${items.name.toUpperCase()} - Pokedex`}
      description={`${items.name} Pokedex Page by Irfan Izudin`}
    >
      <div className="mx-[100px] grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 place-items-center">
        <Image
          src={`https://raw.githubusercontent.com/robert-z/simple-pokemon-json-api/master/public/images/${items.name}.jpg`}
          alt={items.name}
          height={200}
          width={200}
          className="object-contain"
        />
        <div className="flex flex-col items-center sm:items-start w-full space-y-3">
          <h2 className="text-2xl font-bold capitalize">{items.name}</h2>
          <p className="font-bold">
            ID : <span className="font-normal">{`00${items.id}`.slice(-3)}</span>
          </p>
          <p className="font-bold">
            Type :{" "}
            {items.types.map((types, index) => (
              <span key={index} className="font-normal capitalize">
                {types.type.name},{" "}
              </span>
            ))}
          </p>
          <p className="font-bold">
            Abilities :{" "}
            {items.abilities.map((abilities, index) => (
              <span key={index} className="font-normal capitalize">
                {abilities.ability.name},{" "}
              </span>
            ))}
          </p>
          <p className="font-bold">
            Height : <span className="font-normal">{items.height / 10} m</span>
          </p>
          <p className="font-bold">
            Weight : <span className="font-normal">{items.weight / 10} kg</span>
          </p>
        </div>
      </div>
      <Link href="/">
        <a className="flex justify-center text-blue mt-12 hover:underline">Back to list&rarr;</a>
      </Link>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const name = context.params.name;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const items = await res.json();

  return { props: { items } };
};

export default DetailPage;
