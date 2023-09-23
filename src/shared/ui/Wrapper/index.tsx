import clsx from 'clsx'
import classes from './Wrapper.module.scss'
import { AllHTMLAttributes } from 'react'

interface Props extends AllHTMLAttributes<HTMLElement> {
	tag?: 'div' | 'section'
	className?: string
}

function Wrapper({ tag: Tag = 'div', className, children, ...props }: Props) {
	return (
		<Tag
			className={clsx(classes.Wrapper, className)}
			{...props}
		>
			{children}
		</Tag>)
}
export { Wrapper }