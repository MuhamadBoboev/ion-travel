"use client"
import { menuList } from '@/shared/consts/menuList'
import classes from './header-menu.module.scss'
import Link from 'next/link'
import { useTranslation, Trans } from 'react-i18next'

function HeaderMenu() {
	const { t } = useTranslation('header')
	return (
		<nav className={classes.nav} >
			<ul className={classes.list}>
				{menuList.map(({ name, href }) => (
					<li key={href} className={classes.item} >
						<Link className={classes.link} href={href} >
							{t(`nav.${name}`)}
						</Link>
					</li>
				))}
			</ul>
		</nav>)
}
export { HeaderMenu }

