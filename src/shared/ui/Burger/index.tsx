'use client'

import classes from './burger.module.scss'
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux-hooks"
import { toggleMenu } from '@/widgets/Header/model/menuSlice'
import clsx from "clsx"

interface Props {
	type?: 'black' | 'white'
}

function Burger({ type = 'black' }: Props) {
	const { isOpen } = useAppSelector(state => state.menu)
	const dispatch = useAppDispatch()
	return (
		<div className={clsx(
			classes.body,
			type == 'black' ? classes.black : classes.white
		)} >
			<button
				className={clsx(classes.burger, isOpen && classes.open)}
				onClick={() => dispatch(toggleMenu())} >
				<span />
			</button>
		</div>
	)
}
export { Burger }