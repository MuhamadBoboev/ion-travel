import { HandySvg } from 'handy-svg'
import classes from './tag.module.scss'

interface Props {
	tags: Tag[]
}
interface Tag {
	name: string
	img: string
	id: number
}

function Tags({ tags }: Props) {
	return (
		<ul className={classes.tags} >
			{tags.map(({ name, img, id }) => (
				<li className={classes.tag} key={id} >
					<HandySvg className={classes.tag_svg} src={img} width={20} height={20} alt={name} />
					<p className={classes.tag_text} >{name}</p>
				</li>
			))}
		</ul>
	)
}
export { Tags }