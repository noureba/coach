import Head from "next/head";
import Header from "../components/Header";
import Struggling from "../components/Struggling";
import Slider from "../components/slider";
import About from '../components/About'
import Contact from "../components/Contact";
import MyClients from "../components/MyClients";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Struggling/>
      <Slider/>
      <About/>
      <Contact/>
      <MyClients/>
      <Footer/>
    </div>
  );
}
