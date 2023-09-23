'use client'
import { Typography } from '@/shared/ui/Typography'
import classes from './footer-subscribe.module.scss'
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

function FooterSubscribe() {
	const { t } = useTranslation('footer')
	return (
		<div className={classes.footer_subscribe}>
			<Typography size='m' className={classes.title}>
				{t('footerSubscribe.title')}
			</Typography>
			<ul className={classes.items} >
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >Instagram</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >Facebook</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >Telegram</Typography>
					</Link>
				</li>
				<li className={classes.item} >
					<Link href='/asd' >
						<Typography size='h6' >Tik-Tok</Typography>
					</Link>
				</li>
			</ul>
		</div>
	)
}
export { FooterSubscribe }