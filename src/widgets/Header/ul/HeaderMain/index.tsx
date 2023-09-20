import classes from './header-main.module.scss'
import { Wrapper } from '@/shared/ui/Wrapper'
import { HeaderMenu } from '../HeaderMenu'
import { HeaderRight } from '../HeaderRight'
import { Burger } from '@/shared/ui/Burger'
import { MenuMobile } from '../MenuMobile'


function Header() {
	return (
		<header className={classes.main}>
			<Wrapper className={classes.wrapper}>
				<div className={classes.body} >
					<div className={classes.header_left} >
						<Burger />
						<HeaderMenu />
						<MenuMobile />
					</div>
					<img src='assets/img/logo.svg' alt='logo' width={108} height={68} />
					<HeaderRight />
				</div>
			</Wrapper>
		</header>
	)
}

export { Header }