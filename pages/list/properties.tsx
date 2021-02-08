import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../../components/cards/property";
import DeletePopup from "../../components/delete-popup";
import Pagination from "../../components/pagination";
import useMessage from "../../hooks/message.hook";
import PropertiesPaginationData from "../../models/pagination/properties";
import { useAppState } from "../../utils/AppContext";

interface PropertiesListData extends PropertiesPaginationData{
	loading: boolean;
}

const PropertiesList = () => {

	const { state } = useAppState()
	const toast = useMessage()
	const [data, setData] = useState<PropertiesListData>({properties: [], totalDocuments: 0, totalPages: 0, current: 0, loading: true })
	const [page, setPage] = useState(1)
	const [limit, setLimit] = useState(15)

	const get = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/properties?limit=${limit}&page=${page}`)
			const answer : PropertiesListData = {...response.data, loading: false};
			setData({...data, ...answer})
		} catch (error) {
			toast(`Ошибка!\n${error.response ? error.response.data : error}`, false)
			setData({...data, loading: false})
		}
	}

	useEffect(()=>{
		console.log(data)
	}, [data])

	useEffect(()=>{
		if(data.loading){
			get()
		}
		console.log('total');
	}, [])

	useEffect(()=>{
		if(!data.loading){
			get()
			console.log('aaaaaaaaaaaaaaaaaa');
		}
	}, [page])

	return (
		<div className="relative h-screen flex justify-between flex-col">
			{
				state.deletePopup.isActive &&
				<DeletePopup />
			}
			<div className="flex max-w-4xl mx-auto justify-between flex-wrap space-x-4">
				{
					!data.loading ?
					(
						data.properties.length != 0 ?
						data.properties.map(val => {
							return <PropertyCard id={val._id} name={val.name} key={val._id} slug={val.slug}/>
						}) :
						<div>Свойств не найдено</div>
					) :
					<div>Загрузка...</div>
				}
			</div>
			<Pagination total={data.totalPages} current={data.current} onPageChange={setPage} />
		</div>
	)
}

export default PropertiesList
