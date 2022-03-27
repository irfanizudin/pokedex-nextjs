import Layout from "./../components/Layout";
import Card from "./../components/Card";
import { useEffect, useState } from "react";
import ButtonScrollTop from "../components/ButtonScrollTop";

const Home = ({ items }) => {
  const [showBtnScroll, setShowBtnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtnScroll(true);
      } else {
        setShowBtnScroll(false);
      }
    });
    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout title="Pokedex" description="Pokedex homepage by Irfan Izudin">
      <div className="mx-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 place-items-center">
        {items &&
          items.results.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </div>
      {showBtnScroll && <ButtonScrollTop onClick={scrollToTop} />}
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200");
  const items = await res.json();

  return {
    props: { items },
  };
};
