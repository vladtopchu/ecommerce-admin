import Link from "next/link"

export interface CustomLinkProps {
	text: string;
	styles: string;
	link: string;
}

const CustomLink = ({text, styles, link} : CustomLinkProps) => {
	return (
		<div className={styles}>
			<Link href={link}/>
		</div>
	)
}

export default CustomLink