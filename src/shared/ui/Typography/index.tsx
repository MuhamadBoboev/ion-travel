import classes from './typography.module.scss'
import { HTMLAttributes } from "react"
import { typographyTypes } from "./typography-types"
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLElement> {
	size?: typographyTypes
	component?: keyof HTMLElementTagNameMap
	className?: string
}

function Typography({ size = 'l', className, component: Component = 'p', children, ...props }: Props) {
	return (
		<Component
			className={clsx(classes.typography, classes[`type-${size}`], className)}
			{...props}>
			{children}
		</Component>
	)
}
export { Typography }