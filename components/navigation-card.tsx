import Link from 'next/link'

export interface NavigationCardProps {
	title: string,
	links: string[]
}

const NavigationCard = ({title, links} : NavigationCardProps) => {
  return (
    <div className="w-48 rounded-xl shadow-md text-red-50">
			<div className="flex justify-center w-48 h-48 rounded-xl absolute bg-blue-800 opacity-0 hover:opacity-100 transition">
				
				<Link href={links[0]}>
						<a className="flex items-center justify-center w-inherit bg-indigo-300 rounded-l-xl mr-0.5 text-3xl font-bold">+</a>
					</Link>

				<Link href={links[1]}>
					<a className="flex items-center justify-center w-inherit bg-indigo-500 rounded-r-xl ml-0.5 text-3xl font-bold">=</a>
				</Link>

			</div>
			<div className="flex items-center justify-center w-48 h-48 rounded-xl bg-green-500">
				{title}
			</div>
    </div>
	)
}

export default NavigationCard;