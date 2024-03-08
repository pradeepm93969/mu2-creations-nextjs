import { getServices } from "@/lib/contentful/api";
import HeaderMenu from "./HeaderMenu";

const Header = async () => {
  const serviceResponse = await getServices();
  return <HeaderMenu services={serviceResponse.items} />;
};

export default Header;
