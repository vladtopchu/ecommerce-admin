import { FieldError } from "react-hook-form"

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement> & 
	{
		name: string;
  	label: string;
  	register: ({ required }: { required?: boolean }) => RefReturn;
		errorCheck: FieldError;
	};

const Input: React.FC<InputProps> = ({ name, label, register, required, errorCheck }) => (
  <>
    <label>{label}</label>
    <input 
			className={`transition-all duration-300 border-2 rounded-md ${errorCheck && 'border-l-12 border-red-700'}`} 
			name={name}
			ref={register({ required })}/>
  </>
);

export default Input