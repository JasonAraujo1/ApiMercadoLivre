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

export async function fetchAllCategorys() {
	try {
		const response = await fetch(
			"https://api.mercadolibre.com/sites/MLB/categories",
		);
		const data = await response.json();
		//  console.log("categorias:", data);
		return data;
	} catch (error) {
		console.log("Erro fetching data", error);
		return false;
	}
}
