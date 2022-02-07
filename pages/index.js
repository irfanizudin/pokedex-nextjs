import Layout from "./../components/Layout";
import Card from "./../components/Card";

export default function Home({ items }) {
  console.log(items);
  return (
    <Layout title="Pokedex - Home" description="Pokedex homepage by Irfan Izudin">
      <nav className="w-full h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black">Pokemon Dex</h1>
        <h4 className="text-gray mt-[10px]">Get all list pokemon do you want</h4>
      </nav>
      <div className="mx-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
        {items &&
          items.results.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const items = await res.json();

  return {
    props: { items },
  };
}
