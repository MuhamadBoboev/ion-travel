'use client'
import { useState } from 'react'
import classes from './dot.module.scss'
import clsx from 'clsx'
import { Card } from '@/shared/ui/Card'
import { CardDate } from '../../consts/Card'

interface Props {
	top: number
	left: number
}

function Dot({ top, left }: Props) {
	const [active, setActive] = useState<Boolean>(false)

	return (
		<div className={classes.asd} >
			<div className={
				clsx(
					classes.item,
					active && classes.item_active,
				)
			}
				style={{ top: `${top}%`, left: `${left}%` }}
				onMouseMove={() => setActive(true)}
				onMouseOut={() => setActive(false)}
			>
				<div className={classes.item_ball}
					onClick={() => setActive(true)}
				></div>
				<div className={
					clsx(
						classes.item_body,
						active && classes.active
					)
				} >
					<Card card={CardDate} />
				</div>
			</div>
			<div className={
				clsx(
					classes.item_body_mobile,
					active && classes.active_mobile
				)
			} >
				<Card card={CardDate} />
			</div>
		</div>
	)
}
export { Dot }