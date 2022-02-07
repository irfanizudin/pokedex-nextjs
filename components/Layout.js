import Head from "next/head";
import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title className="capitalize">{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>
      <main className="bg-white w-full min-h-screen font-inter pb-10 xl:px-[80px]">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
