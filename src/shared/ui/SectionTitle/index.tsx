import clsx from "clsx"
import { HTMLAttributes } from "react"
import classes from './section-title.module.scss'
interface Props extends HTMLAttributes<HTMLElement> {
	className?: string
	color?: 'black' | 'white'
}

function SectionTitle({ className, color = 'black', children, ...props }: Props) {
	return (
		<h2 className={clsx(
			classes.text,
			color == "black" ? classes.text_black : classes.text_white,
			className,
		)}
			{...props}>
			{children}
		</h2>
	)
}
export { SectionTitle }