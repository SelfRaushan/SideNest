import { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import '../components/HeaderFooter.css';
import './About.css';
const About = () => {
  useEffect(() => {
    document.title = "About - SideNest";
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>About</h1>
        <p>Here you can find information about us.</p>
      </main>
      <Footer />
    </>
  );
};
