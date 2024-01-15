import Banner from "@/components/ui/Banner";
import FeaturedPoperties from "@/components/ui/FeaturedPoperties";
import SearchFilter from "@/components/ui/SearchFilter";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Banner />
      <SearchFilter />
      <FeaturedPoperties />
    </main>
  );
}
