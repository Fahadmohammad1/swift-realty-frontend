import AboutUs from "@/components/ui/homepage/AboutUs";
import Banner from "@/components/ui/homepage/Banner";
import ContactUs from "@/components/ui/homepage/ContactUs";
import FeaturedPoperties from "@/components/ui/homepage/FeaturedPoperties";
import LatestBlog from "@/components/ui/homepage/LatestBlog";
import SearchFilter from "@/components/ui/homepage/SearchFilter";
import TeamInfo from "@/components/ui/homepage/TeamInfo";
import Testimonial from "@/components/ui/homepage/Testimonial";
import WhyChooseUs from "@/components/ui/homepage/WhyChooseUs";

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
