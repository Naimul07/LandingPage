import Apoinment from "@/components/Apoinment";
import Brand from "@/components/Brand";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brand/>
      <Features/>
      <Apoinment/>
      <Footer/>
    </div>
  );
}
