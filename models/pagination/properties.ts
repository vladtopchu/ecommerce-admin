import Property from "../property";
import PaginationModel from "./model";

interface PropertiesPaginationData extends PaginationModel{
	properties: Property[]
}

export default PropertiesPaginationData