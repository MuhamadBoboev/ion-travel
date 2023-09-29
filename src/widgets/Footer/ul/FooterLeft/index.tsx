'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './footer-left.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import HTMLReactParser from 'html-react-parser'


function FooterLeft() {
	const { t } = useTranslation('footer')
	return (
		<div className={classes.footer_left}>
			<Link href='/'>
				<img className={classes.footer_left__img} src='assets/img/logo.svg' width={132} height={80} alt='logo' /></Link>
			<div className={classes.text_block}>
				<h2 className={classes.title} >
					{t('footerLeft.title')}
				</h2>
				<Typography className={classes.text} size='m' >
					{HTMLReactParser(t('footerLeft.text') || '')}
				</Typography>
				<Link href='out-tours' className={classes.button}>
					{t('footerLeft.button')}
				</Link>
			</div>
		</div>
	)
}
export { FooterLeft }