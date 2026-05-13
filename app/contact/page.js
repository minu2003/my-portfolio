import Contactme from "../components/Contactme";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <div className="relative">
      <Navbar />
      <Contactme />
      <Footer />
    </div>
  );
}