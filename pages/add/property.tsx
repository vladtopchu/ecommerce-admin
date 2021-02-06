import { useForm } from "react-hook-form";
import Input from "../../components/input";
import axios from "axios";
import { Router, useRouter } from 'next/router';
import { toast } from "react-toastify";

export interface AddPropertyProps {
	name: string;
}

const AddProperty = () => {

	const { register, handleSubmit, watch, errors } = useForm<AddPropertyProps>();
	const router = useRouter()
	const onSubmit = async (data : AddPropertyProps) => {
		try{
			await axios.post('http://localhost:5000/properties/', data)
			router.push('/')
			toast.success('Свойство добавленно успешно', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
		} catch(err){
			toast(`Ошибка!\n${err.resonse.data}`)
		}
	}

	return (
		<div className="flex flex-col max-w-xl mx-auto">
			<span className="text-center font-bold text-xl my-6">Добавить новое свойство товара</span>
			<form className="flex flex-col justify-center space-y-5" onSubmit={handleSubmit(onSubmit)}>
	      <Input label='Имя' name='name' register={register} errorCheck={errors.name} required />
	      <input type="submit"/>
    	</form>
		</div>
	)
}

export default AddProperty

