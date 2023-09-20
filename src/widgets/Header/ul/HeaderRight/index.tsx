import Link from 'next/link'
import classes from './header-right.module.scss'
import { LanguageButton } from '@/shared/ui/LanguageButton'

function HeaderRight() {
	return (
		<div className={classes.wrapper}>
			<Link className={classes.tell} href='tell:+992 900 00 00 00'>+992 900 00 00 00</Link>
			<LanguageButton />
			<Link href={'sda'} className={classes.button} >
				Наши туры
			</Link>
		</div>
	)
}
export { HeaderRight }