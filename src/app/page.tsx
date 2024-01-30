import AboutUs from "@/components/ui/AboutUs";
import Banner from "@/components/ui/Banner";
import ContactUs from "@/components/ui/ContactUs";
import FeaturedPoperties from "@/components/ui/FeaturedPoperties";
import LatestBlog from "@/components/ui/LatestBlog";
import SearchFilter from "@/components/ui/SearchFilter";
import TeamInfo from "@/components/ui/TeamInfo";
import Testimonial from "@/components/ui/Testimonial";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Banner />
      </div>
      <SearchFilter />
      <FeaturedPoperties />
      <WhyChooseUs />
      <Testimonial />
      <TeamInfo />
      <AboutUs />
      <LatestBlog />
      <ContactUs />
    </main>
  );
}
