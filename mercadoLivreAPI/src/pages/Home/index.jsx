import { useState, useEffect } from "react";
import ProductCards from "../../components/ProductCards";
import {
	fetchAllCategories,
	fetchByQuery,
	fetchCategorySelected,
} from "../../services/fetchApi";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [categoryProducts, setCategoryProducts] = useState([]);

	useEffect(() => {
		async function onLoad() {
			const data = await fetchByQuery();
			setProducts(data.results);

			const dataCategories = await fetchAllCategories();
			setCategories(dataCategories);

			console.log("Categorias:", dataCategories);

		}

		onLoad();
	}, []);

	async function handleChangeOption({target}){
		const categoryProducts = await fetchCategorySelected(target.value);
		console.log(categoryProducts)
		setProducts(categoryProducts)
	} 
	
	return (
		<div>
			<div className=" bg-amber-200 ">
				<div className="p-14 flex justify-between max-w-[1280px]  mx-auto gap-3">
					<div className="bg-gray-200 rounded-xl flex px-2 ">
						<select
							onChange={handleChangeOption}
							className="flex px-2 md:px-5 outline-0 bg-gray-200 cursor-pointer  w-full sm:w-24 md:w-32 lg:w-40"
						>
							<option selected >Categoria</option>
							{categories.map((category) => (
								<option value={category.id}> {category.name}</option>
							))}
						</select>
					</div>
					<div className="flex items-center">
						<input
							type="search"
							className="border-neutral-950 border-2 bg-white p-1 outline-0 w-full sm:w-10 md:w-50 "
						/>
						<button className="flex border-neutral-950 border-2 bg-white p-1">
							<span className="material-symbols-outlined cursor-pointer">
								search
							</span>
						</button>
					</div>
				</div>
			</div>
			<h1 className="text-3xl text-center p-12 font-medium">
				Simulado FrontEnd
			</h1>
			<ProductCards products={products} categoryProducts={categoryProducts} />
		</div>
	);
}
