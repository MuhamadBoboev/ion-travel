import { Typography } from '@/shared/ui/Typography'
import { Wrapper } from "@/shared/ui/Wrapper"
import classes from './banner.module.scss'
import Link from 'next/link'
import { Card } from './Card'
import { Header } from '../Header'
import { SectionTitle } from '@/shared/ui/SectionTitle'
import { Tabs } from '@/shared/ui/Tabs'
import { Button } from '@/shared/ui/Button'
interface Props {
	subtitle?: string
	title?: string
	tabs?: TabsItem[]
	text?: string
	button?: LinkButton
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
function Banner({ subtitle, title, tabs, text, button }: Props) {
	return (<div className={classes.wrapper}>
		<Header />
		<div className={classes.body} >
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
			<div className={classes.tabs_block_mobile} >
				{tabs && <Tabs tabs={tabs} />}
			</div>
		</div>
	</div>
	)
}

export { Banner }