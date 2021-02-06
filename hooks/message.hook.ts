import { useCallback } from 'react'
import { toast, ToastOptions } from 'react-toastify'

let settings : ToastOptions = {
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

const useMessage = () => {
	toast.configure()
	return useCallback((text : string, state : boolean) => {
		if (text) {
			if(state){
				toast.success(text, settings)
			} else{
				toast.error(text, settings)
			}
		}
	}, [])
}

export default useMessage