import axios from "axios"
import { useRouter } from "next/router"
import useMessage from "../hooks/message.hook"
import { useAppState } from "../utils/AppContext"

const DeletePopup = () => {
	
	const { state, dispatch } = useAppState()
	const toast = useMessage()
	const router = useRouter()

	return (
		<div className="absolute p-4 border-2 flex flex-col justify-between top-1/3 h-48 transform inset-x-0 shadow-xl bg-white w-3/4 mx-auto rounded-lg">
			<div>
				Вы действительно хотите навсегда удалить данное значение?
				<small>{state.deletePopup.link}</small>
			</div>
			<div className="flex justify-around">
				<div
					className="p-2 text-pink-50 bg-red-500 cursor-pointer"
					onClick={async ()=>{
						try {
							await axios.delete(state.deletePopup.link)
							toast('Успешно удалено!', true)
							dispatch({type: "REMOVE_DELETE_POPUP"})
							setTimeout(()=>{
								router.reload()
							}, 500)
						} catch (error) {
							console.log(error);
							console.log(Object.keys(error));
							toast(error, false)
						}
					}}>Да, подтверждаю</div>
				
				<div className="p-2 rounded-xl border-2 border-gray-500" onClick={()=>{
					dispatch({type: "REMOVE_DELETE_POPUP"})
				}}>
					Отмена
				</div>
			</div>
		</div>
	)
}

export default DeletePopup