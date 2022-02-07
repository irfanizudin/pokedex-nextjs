import Layout from "./../components/Layout";
import Card from "./../components/Card";

const Home = ({ items }) => {
  return (
    <Layout title="Pokedex - Home" description="Pokedex homepage by Irfan Izudin">
      <div className="mx-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
        {items &&
          items.results.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21");
  const items = await res.json();

  return {
    props: { items },
  };
};
