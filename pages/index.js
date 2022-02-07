import Layout from "./../components/Layout";
import Card from "./../components/Card";

export default function Home() {
  return (
    <Layout title="Pokedex - Home" description="Pokedex homepage by Irfan Izudin">
      <nav className="w-full h-[200px] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-black">Pokemon Dex</h1>
        <h4 className="text-gray mt-[10px]">Get all list pokemon do you want</h4>
      </nav>
      <div className="mx-[100px] grid grid-cols-3 gap-10 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
}
