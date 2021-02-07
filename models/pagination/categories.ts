import Category from "../category";
import PaginationModel from "./model";

interface CategoriesPaginationData extends PaginationModel{
	properties: Category[];
}

export default CategoriesPaginationData