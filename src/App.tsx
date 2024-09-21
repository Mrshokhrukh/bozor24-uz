import SearchForm from "./components/features/form/SearchForm";
import BrandsSection from "./components/ui/BrandsSection";
import HomePage from "./pages/clientPage/HomePage";

type Props = {};

function App({}: Props) {
  return (
    <div className="">
      <SearchForm />
      <div className="mt-[73px]">
        <BrandsSection />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
