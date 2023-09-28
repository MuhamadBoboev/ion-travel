import clsx from 'clsx'
import classes from './tabs.module.scss'
import Link from 'next/link'
interface Props {
	className?: string
	tabs?: TabsItem[]
}

interface TabsItem {
	name: string
	link: string
	active: boolean
}
function Tabs({ className, tabs }: Props) {
	return (
		<div className={clsx(
			classes.wrapper,
			className
		)}>
			<div className={classes.items}>
				{tabs?.map(el =>
					<Link key={el.name} href='asd' className={clsx(
						classes.item,
						el.active && classes.active
					)}>
						{el.name}
					</Link>
				)}
			</div>
		</div>
	)
}
export { Tabs }