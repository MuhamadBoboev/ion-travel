'use client'
import { AllHTMLAttributes, ReactNode } from 'react'
import classes from './wrapper-content.module.scss'
interface Props extends AllHTMLAttributes<HTMLElement> {
	header: ReactNode
}

function WrapperContent({ header, children }: Props) {
	return (
		<div className={classes.wrapper}>
			<div className={classes.body} >
				<div className={classes.body_top} >
					{header}
				</div>
				<div className={classes.body_footer}>
					{children}
				</div>
			</div>
		</div>
	)
}
export { WrapperContent }