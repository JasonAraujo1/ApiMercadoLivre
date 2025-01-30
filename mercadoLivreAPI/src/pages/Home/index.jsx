import MenuBar from "../../components/MenuBar";
import ProductCards from "../../components/ProductCards";
import ApiComputerCategory from "../../APIs/ApiComputerCategory";

export default function Home() {
	const { products } = ApiComputerCategory();  
  
	return (
	  <div>
		<MenuBar />
		<h1 className="text-3xl text-center p-12 font-medium">
		  Simulado FrontEnd
		</h1>
		<ProductCards products={products} />
	  </div>
	);
  }