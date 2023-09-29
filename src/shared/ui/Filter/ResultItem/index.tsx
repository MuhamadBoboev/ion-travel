import { HandySvg } from 'handy-svg'
import classes from './result-item.module.scss'
import as from '../../../../../public/assets/icons/beach.webp'
function ResultItem() {
	return (
		<div className={classes.item}>
			<div className={classes.body} >
				<div className={classes.title_block}>
					<p className={classes.title} >рестораны номер 1</p>
				</div>
				<div className={classes.img_block} >
					<img src='/assets/img/tour_image.webp' alt='asd' width={288} height={200} />
				</div>
				<div className={classes.info_info_block} >
					<div className={classes.info_block}>
						<div className={classes.info_text_block} >
							<div className={classes.title_block_mobile}>
								<p className={classes.title} >рестораны номер 1</p>
							</div>
							<p className={classes.info_text} >
								Равным образом, глубокий уровень погружения, а также свежий взгляд на привычные
								вещи — безусловно открывает новые горизонты для инновационных методов управления
								процессами.
							</p>
						</div>
						<div className={classes.tags_block} >
							<ul className={classes.tags} >
								<li className={classes.tag} >
									<HandySvg className={classes.tag_svg} src='/assets/icons/tag_beach.svg' width={20} height={20} alt={'tagIcon'} />
									<p className={classes.tag_text} >Душанбе</p>
								</li>
								<li className={classes.tag} >
									<HandySvg className={classes.tag_svg} src='/assets/icons/tag_beach.svg' width={20} height={20} alt={'tagIcon'} />
									<p className={classes.tag_text} >Душанбе</p>
								</li>
								<li className={classes.tag} >
									<HandySvg className={classes.tag_svg} src='/assets/icons/tag_beach.svg' width={20} height={20} alt={'tagIcon'} />
									<p className={classes.tag_text} >Душанбе</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<HandySvg className={classes.info_svg} src='/assets/icons/arrow_up_right_s.svg' width={32} height={32} alt='arrow' />
		</div>
	)
}
export { ResultItem }