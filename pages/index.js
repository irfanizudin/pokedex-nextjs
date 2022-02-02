import Layout from "./../components/Layout";
import Card from "./../components/Card";

export default function Home() {
  return (
    <Layout title="Pokedex - Home" description="Pokedex homepage by Irfan Izudin">
      <nav className="w-full h-[80px] flex items-center justify-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
          alt="logo-pokemon"
          className="h-[65px] object-contain"
        />
      </nav>
      <div className="mx-[100px] grid grid-cols-4 gap-10 mt-10">
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
