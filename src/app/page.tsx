import Navbar from "@/sections/Navbar";
import Homepage from "@/sections/Home";
import Clients from "@/sections/Clients";
import SkilledProfessionals from "@/sections/SkilledProfessionals";
import Hiring from "@/sections/Hiring";
import WhoWeServe from "@/sections/WhoWeServe";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Homepage />
            <Clients />
            <SkilledProfessionals />
            <Hiring />
            <WhoWeServe />
            <Footer />
        </>
    );
}
