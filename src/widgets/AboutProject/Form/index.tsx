import { Typography } from '@/shared/ui/Typography'
import classes from './form.module.scss'

function Form() {
	return (
		<div className={classes.form}>
			<div className={classes.body} >
				<div className={classes.left} >
					<img className={classes.logo} src='/assets/img/logo_main.svg' alt='logo' width={105} height={64} />
					<Typography size='h3' className={classes.title} >Остались вопросы?</Typography>
					<Typography size='l' className={classes.text} >Для связи с нами Вы можете воспользоваться формой обратной связи. Напишите нам и мы ответим в ближайшее время</Typography>
				</div>
				<div className={classes.right} >
					<div className={classes.input_block} >
						<input type='text' className={classes.input} placeholder='Имя' />
					</div>
					<div className={classes.input_block} >
						<input type='text' className={classes.input} placeholder='Номер телефона' />
					</div>
					<button className={classes.button}>
						<Typography size='m' >Поехали!</Typography>
					</button>
				</div>
			</div>
		</div>
	)
}
export { Form }