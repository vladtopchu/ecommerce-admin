interface Category {
	_id: string;
	title: string;
	img: string;
	super: string;
	main: boolean;
	properties: string[];
	parent: string;
	children: string[];
	path: string[];
	slug: string[];
	timestamp: Date;
}

export default Category