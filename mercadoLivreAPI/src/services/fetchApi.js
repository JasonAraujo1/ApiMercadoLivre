export async function fetchByQuery() {
	try {
		const response = await fetch(
			"https://api.mercadolibre.com/sites/MLB/search?q=computador",
		);
		const data = await response.json();
		// console.log(data);
		return data;
	} catch (error) {
		console.log("Erro fetching data", error);
		return false;
	}
}

export async function fetchAllCategories() {
	try {
		const response = await fetch(
			"https://api.mercadolibre.com/sites/MLB/categories",
		);
		const data = await response.json();
		//   console.log("categoriasss:", data);
		return data;
	} catch (error) {
		console.log("Erro fetching data", error);
		return false;
	}
}

export async function fetchCategorySelected(categoryId) {
	if (!categoryId) return false;

	try {
		const response = await fetch(
			`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
		);
		const data = await response.json();

		console.log("Produtos da Categoria:", data.results);
		return data.results;
	} catch (error) {
		console.log("Erro ao buscar produtos por categoria", error);
		return false;
	}
}
