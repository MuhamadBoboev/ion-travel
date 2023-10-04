import { Typography } from '@/shared/ui/Typography'
import { Wrapper } from "@/shared/ui/Wrapper"
import classes from './banner-main.module.scss'
import Link from 'next/link'
import { Header } from '../Header'
import { CardDate } from './consts/Card'
import { Card } from '@/shared/ui/Card'
import { HeaderMain } from '../HeaderMainPage'

function BannerMain() {
	return (
		<div className={classes.wrapper}>
			<HeaderMain />
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
					<Card
						card={CardDate} />
				</div>
			</div>
		</div>
	)
}

export { BannerMain }