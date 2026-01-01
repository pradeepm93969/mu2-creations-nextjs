import services from "@/lib/data/services.json";
import HeaderMenu from "./HeaderMenu";

const Header = async () => {
  return <HeaderMenu services={services} />;
};

export default Header;
