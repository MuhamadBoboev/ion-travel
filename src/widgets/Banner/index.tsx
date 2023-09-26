import { Typography } from '@/shared/ui/Typography'
import { Wrapper } from "@/shared/ui/Wrapper"
import classes from './banner.module.scss'
import Link from 'next/link'
import { Card } from './Card'
import { Header } from '../Header'

function Banner() {
	return (<div className={classes.wrapper}>
		<Header />
		<div className={classes.body} >
			<div className={classes.block_info}>
				<h2 className={classes.title} >
					Откройте Таджикистан с новой стороны
				</h2>
				<Typography size='l' className={classes.text}>
					Близость к природе, и <br />
					доброжелательность ждут вас
				</Typography>
				<Link href='sad' className={classes.button}>
					<Typography size='m' >
						Поехали!
					</Typography>
				</Link>
			</div>
			<div className={classes.card_block} >
				<Card />
			</div>
		</div>
	</div>)
}

export { Banner }