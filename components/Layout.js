import Head from "next/head";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-green w-full min-h-screen">{children}</main>
    </>
  );
};

export default Layout;
