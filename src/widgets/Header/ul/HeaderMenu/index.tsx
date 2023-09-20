import { menuList } from '@/shared/consts/menuList'
import classes from './header-menu.module.scss'
import Link from 'next/link'

function HeaderMenu() {
	return (
		<nav className={classes.nav} >
			<ul className={classes.list}>
				{menuList.map(({ name, href }) => (
					<li key={href} className={classes.item} >
						<Link className={classes.link} href={href} >
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>)
}
export { HeaderMenu }

