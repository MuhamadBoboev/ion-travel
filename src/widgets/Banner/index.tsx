import { Typography } from '@/shared/ui/Typography'
import classes from './banner.module.scss'
import Link from 'next/link'
import { Header } from '../Header'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { Tabs } from '@/shared/ui/Tabs'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
	subtitle?: string
	title?: string
	tabs?: TabsItem[]
	text?: string
	button?: LinkButton
	children?: ReactNode
}
interface TabsItem {
	name: string
	link: string
	active: boolean
}
interface LinkButton {
	name: string
	link: string
}
function Banner({ subtitle, title, tabs, text, button, children }: Props) {
	return (<div className={classes.wrapper}>
		{/* <Header /> */}
		<div className={clsx(
			classes.body,
			children && classes.body_children
		)} >
			<div className={classes.info} >
				<div className={classes.info_left} >
					<Typography size='m' >
						{subtitle}
					</Typography>
				</div>
				<div className={classes.info_center}>
					<SectionTitle className={classes.info_center_title}>
						{title}
					</SectionTitle>
					<div className={classes.tabs_block} >
						{tabs && <Tabs tabs={tabs} />}
					</div>
					{/* <div> */}
					{/* <p className={classes.text_5} >
							{subtitle}
						</p> */}
					{/* <Link href='asd' className={classes.info_button}>
							<Typography size='m' className={classes.text_2}>
								Все наши туры
							</Typography>
						</Link> */}
					{/* </div> */}
				</div>
				<div className={classes.info_right} >
					<Typography size='l' className={classes.text_3}>
						{text}
					</Typography>
					{button && <Link href={`${button?.link}`} className={classes.link_button}>
						{button?.name}
					</Link>}
				</div>
			</div>
			{tabs && <div className={classes.tabs_block_mobile} >
				<Tabs tabs={tabs} />
			</div>}
			{children && <div className={classes.content}>
				{children}
			</div>}
		</div>
	</div>
	)
}

export { Banner }