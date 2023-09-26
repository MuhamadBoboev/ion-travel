import { Typography } from '@/shared/ui/Typography'
import classes from './advertising.module.scss'
// import ds from './../../../public/assets/img/map_fon.svg'
function Advertising() {
	return (
		<div className={classes.wrapper}>
			<div className={classes.body}>
				<div className={classes.title_block} >
					<p className={classes.title} >Таджикистан</p>
					<p className={classes.title} >место где отдыхают</p>
					<p className={classes.title} >душой и разумом</p>
				</div>
				<div className={classes.text_block} >
					<Typography size='l' >
						Добро пожаловать в Таджикистан! Страна в Центральной Азии с богатой историей и культурой! Проводя миролюбивую политику открытых дверей и поддерживая дружественные отношения со странами региона.
						Правительство Таджикистана уделяет особое внимание привлечению инвестиций, для чего сотрудничает с международными финансовыми институтами страны для улучшения благоприятного инвестиционного климата. Здесь очень красивые и приятные для туристов места!
					</Typography>
				</div>
			</div>
			<div className={classes.fon} >
				<img src='/assets/img/map_fon.svg' className={classes.img} width={848} height={592} alt='map' />
			</div>
		</div>
	)
}
export { Advertising }