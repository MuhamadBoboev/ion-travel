'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './footer-navigation.module.scss'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function FooterNavigation() {
	const { t } = useTranslation('footer')
	return (
		<div className={classes.footer_navigation}>
			<Typography size='m' className={classes.title}>
				{t('footerNavigation.navigation')}
			</Typography>
			<ul className={classes.items} >
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >
							{t('footerNavigation.main')}
						</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >
							{t('footerNavigation.outTours')}
						</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >
							{t('footerNavigation.aboutUs')}
						</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >
							{t('footerNavigation.WhereToGo')}
						</Typography>
					</Link>
				</li>
			</ul>
		</div>
	)
}
export { FooterNavigation }