import React from "react";

function ProductCards({ products }) {
	if (products === null || products === undefined) {
		return <p className="text-center text-gray-500">Carregando produtos...</p>;
	  }
	  
	  if (products.results === null || products.results === undefined) {
		return <p className="text-center text-gray-500">Carregando produtos...</p>;
	  }
	  
	  if (products.results.length === 0) {
		return <p className="text-center text-gray-500">Carregando produtos...</p>;
	  }

	return (
		<div className="flex flex-col items-center p-4 sm:p-6 lg:p-8 ">
			<h1 className="text-left w-3xl">Categoria: {products.query}</h1>
			{products.results.map((product) => (
				
				<div className="flex flex-col sm:flex-row bg-gray-200 rounded-3xl cursor-pointer w-full max-w-4xl m-6 border-gray-200 border-3" >
					<div className="flex items-center justify-center w-full sm:w-1/4 aspect-square rounded-xl ">
						<img
							src={product.thumbnail}
							alt="Product"
							className="w-full h-full border-1 rounded-3xl  border-gray-200 object-"
						/>
					</div>

					<div className="flex flex-col justify-center p-5 w-full sm:w-2/3">
						<span className="text-lg font-semibold sm:text-xl lg:text-2xl text-gray-900">
							{product.title}
						</span>
						<span className="text-sm sm:text-base lg:text-lg text-gray-600">
							Endereço: {product.address.city_name} - {product.address.state_name}
						</span>
						<span className="text-sm sm:text-base lg:text-lg text-gray-600">
							Preço: R$ {product.price}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductCards;
