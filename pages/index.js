import Layout from "./../components/Layout";

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
    </Layout>
  );
}
