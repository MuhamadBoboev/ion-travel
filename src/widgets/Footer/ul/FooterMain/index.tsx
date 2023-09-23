'use client'
import classes from './footer-main.module.scss'
import { Wrapper } from '@/shared/ui/Wrapper'
import { FooterContacts } from '../FooterContacts'
import { FooterLeft } from '../FooterLeft'
import { FooterNavigation } from '../FooterNavigation'
import { FooterSubscribe } from '../FooterSubscribe'
import { Typography } from '@/shared/ui/Typography'
import { useTranslation } from 'react-i18next';


function Footer() {
	const { t } = useTranslation('footer')
	return (
		<Wrapper className={classes.wrapper}>
			<div className={classes.footer} >
				<div className={classes.body} >
					<FooterLeft />
					<FooterContacts />
					<FooterSubscribe />
					<FooterNavigation />
				</div>
				<div className={classes.bottom} >
					<Typography size='m' className={classes.bottom_text}>
						©Iontravel 2023. All rights reserved. &nbsp;
						<a href='asd'>
							{t('footerBottom.securityPolicy')}
						</a>
					</Typography>
					<Typography size='m'>
						{t('footerBottom.developedByBOBO')}
					</Typography>
				</div>
			</div>
		</Wrapper>
	)
}
export { Footer }