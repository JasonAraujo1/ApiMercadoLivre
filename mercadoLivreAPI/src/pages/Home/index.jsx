import { useState, useEffect } from "react";
import ProductCards from "../../components/ProductCards";
import {
	fetchAllCategories,
	fetchByQuery,
	fetchBySerch,
	fetchCategorySelected,
} from "../../services/fetchApi";

export default function Home() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [categoryName, setCategoryName] = useState([]);
	const [search, setSearch] = useState("");

	
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

	async function handleChangeOption({target}) {
		const selectedCategory = categories.find(category => category.id === target.value);//dentro de categories vai procurar tudo e trazer oque tem referente ao id do alvo(target) selecionado ou seja: Dentro do array categories, o .find() procura um item onde o id seja igual ao target.value. Ele busca a categoria correspondente ao ID selecionado no <select>.
		const selectedCategoryName = selectedCategory.name
		setCategoryName(selectedCategoryName)
		console.log("Categoria selecionada:", selectedCategory?.name);
	
		const categoryProducts = await fetchCategorySelected(target.value);
		console.log("categoryProducts:",categoryProducts);
		setProducts(categoryProducts);
		
		
		
	}

	async function handleSearchInput() {
		const searchInput = await fetchBySerch(search)
		setProducts(searchInput)
		console.log("BUSCA do input search:",searchInput);
			
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
						 	value={search}
							onChange={(e)=>setSearch(e.target.value)}
							type="search"
							className="border-neutral-950 border-2 bg-white p-1 outline-0 w-full sm:w-10 md:w-50 "
							placeholder="Busque um produto"
						/>
						<button onClick={handleSearchInput} className="flex border-neutral-950 border-2 bg-white p-1">
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
			<ProductCards products={products} categories={categoryName}/>
		</div>
	);
}
