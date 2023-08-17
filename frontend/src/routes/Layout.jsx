import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
