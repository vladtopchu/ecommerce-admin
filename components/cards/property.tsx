import Link from "next/link"
import { useAppState } from "../../utils/AppContext"

export interface PropertyCardProps {
	id: string;
	name: string;
	slug: string;
}

const PropertyCard = ({id, name, slug} : PropertyCardProps) => {

	const { dispatch } = useAppState()
	const links : string[] = [`/edit/${slug}`, `http://localhost:5000/properties?slug=${slug}`]

	return (
		<div 
			className="w-48 rounded-xl shadow-md bg-gray-200">
			
			<div className="flex justify-center w-48 h-48 rounded-xl absolute bg-gray-500 opacity-0 hover:opacity-100 transition">
				
				<Link href={links[0]}>
					<a className={`flex items-center justify-center w-inherit rounded-l-xl bg-green-500 text-3xl font-bold ${links.length == 2 && 'mr-0.25'}`}>/</a>
				</Link>

				<div
					onClick={(e)=> {
						console.log('2');
						dispatch({type: "SET_DELETE_POPUP", payload: {isActive: true, link: links[1]}})
						e.stopPropagation()

					}}
					className="flex cursor-pointer items-center justify-center w-inherit bg-red-500 rounded-r-xl ml-0.25 text-3xl font-bold">-</div>

			</div>
			<div className="flex flex-col items-center justify-center w-48 h-48 rounded-xl">
				<h1 className="text-md text-center font-bold">{name}</h1>
				<h2 className="text-sm pt-2">{id}</h2>
			</div>
		</div>
	)
}

export default PropertyCard
