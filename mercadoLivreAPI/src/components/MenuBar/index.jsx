import React from "react";
import Categories from "../Categories";

export default function MenuBar({products}) {
	return (
		<div className=" bg-amber-200 ">
			<div className="p-14 flex justify-between max-w-[1280px]  mx-auto gap-3">
				<Categories products={products} />
				<div className="flex items-center">
					<input
						type="search"
						className="border-neutral-950 border-2 bg-white p-1 outline-0 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
					/>
					<button className=" flex border-neutral-950 border-2 bg-white p-1" >
						<span className="material-symbols-outlined cursor-pointer">search</span>
					</button>
				</div>
			</div>
		</div>
	);
}
