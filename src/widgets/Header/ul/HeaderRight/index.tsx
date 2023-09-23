// 'use client'
import Link from 'next/link'
import classes from './header-right.module.scss'
import { LanguageButton } from '@/shared/ui/LanguageButton'
import { useTranslation } from 'react-i18next';

function HeaderRight() {
	const { t } = useTranslation('header')
	return (
		<div className={classes.wrapper}>
			<Link className={classes.tell} href='tell:+992 900 00 00 00'>+992 900 00 00 00</Link>
			<LanguageButton />
			<Link href={'sda'} className={classes.button} >
				{t('ourTours')}
			</Link>
		</div>
	)
}
export { HeaderRight }