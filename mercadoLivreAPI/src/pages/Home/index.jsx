import MenuBar from "../../components/MenuBar";
import ProductCards from "../../components/ProductCards";
import { useState, useEffect } from "react";
import { fetchAllCategorys, fetchByQuery } from "../../services/fetchApi";
import Categories from "../../components/Categories";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function onLoad() {
			const data = await fetchByQuery();
			const results = data.results;
			// console.log(results)
			setProducts(results);

			const dataCategories = await fetchAllCategorys();
			const resultsCategories = dataCategories;
			setCategories(resultsCategories);
			console.log("categorias:", resultsCategories);
		}
		onLoad();
	}, []);



	return (
		<div>
			<MenuBar categories = {categories}/>
			<h1 className="text-3xl text-center p-12 font-medium">
				Simulado FrontEnd
			</h1>
			<ProductCards products={products} />
		</div>
	);
}
