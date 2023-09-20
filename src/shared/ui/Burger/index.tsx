'use client'

import classes from './burger.module.scss'
import { useAppSelector, useAppDispatch } from "@/shared/lib/redux-hooks"
import { toggleMenu } from '@/widgets/Header/model/menuSlice'
import clsx from "clsx"

function Burger() {
	const { isOpen } = useAppSelector(state => state.menu)
	const dispatch = useAppDispatch()
	return (
		<button
			className={clsx(classes.burger, isOpen && classes.open)}
			onClick={() => dispatch(toggleMenu())} >
			<span />
		</button>
	)
}
export { Burger }