'use client'
import clsx from 'clsx'
import classes from './language-button.module.scss'
import { useTranslation, Trans } from 'react-i18next'
import { useState } from 'react';

// interface InterfaceLngs {
// 	en: InterfaceLng
// 	ru: InterfaceLng
// }
interface InterfaceLng {
	nativeName: string
}
// const lngs: InterfaceLngs = {
// 	en: { nativeName: 'English' },
// 	ru: { nativeName: 'Russian' },
// }

function LanguageButton() {

	const { t, i18n } = useTranslation()
	const [translate, setTranslate] = useState<Number>(1)

	const changeLanguage = (language: string, checkout: number) => {
		i18n.changeLanguage(language);

		if (checkout == 1) {
			setTranslate(1)
		} else {
			setTranslate(2)
		}
	}
	return (<div className={classes.items}>
		{/* <div className={clsx(classes.item)} onClick={() => setTranslate(!translate)} >
			<p>RU</p>
		</div>
		<div className={clsx(classes.item, translate ? classes.active : '')} onClick={() => setTranslate(!translate)} >
			<p>EN</p>
		</div> */}
		{/* {t("text")} */}
		{/* <Trans i18nKey='text' >
			Edit text
		</Trans> */}
		{/* <Trans i18nKey={'aboutTheProject'} ></Trans> */}
		{/* {t('new.key', 'sfddfs')} */}
		<button className={clsx(classes.item, translate == 1 ? classes.active : '')} onClick={() => changeLanguage('ru', 1)} >RU</button>
		<button className={clsx(classes.item, translate == 2 ? classes.active : '')} onClick={() => changeLanguage('en', 2)} >EN</button>
	</div>)
}

export { LanguageButton }



// {Object.keys(lngs).map((lng) => (
// 	<button key={lng} type='submit' onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
// 		{/* {lngs[lng].nativeName} */}
// 	</button>
// )
// )}