'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './footer-contacts.module.scss'
import { LanguageButton } from '@/shared/ui/LanguageButton'
import { useTranslation } from 'react-i18next'

function FooterContacts() {
	const { t } = useTranslation('footer')
	return (
		<div className={classes.footer_contacts}>
			<Typography size='m' className={classes.title} >
				{t('footerContacts.title')}
			</Typography>
			<Typography size='h6' className={classes.address} >
				{t('footerContacts.address')}
			</Typography>
			<a href='map' >
				<Typography size='m' className={classes.map}>
					{t('footerContacts.lookOnTheMap')}
				</Typography>
			</a>
			<a href='tell:+992900000000' >
				<Typography size='h6' className={classes.number}>
					+992 900 00 00 00
				</Typography>
			</a>
			<Typography size='m' className={classes.tell}>
				{t('footerContacts.tell')}
			</Typography>
			<LanguageButton />
		</div>
	)
}
export { FooterContacts }