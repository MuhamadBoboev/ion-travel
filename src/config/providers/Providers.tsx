import { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'
import { I18NProvider } from './I18nProvider'

function Providers({ children }: { children: ReactNode }) {
	return (
		<ReduxProvider>
			<I18NProvider>
				{children}
			</I18NProvider>
		</ReduxProvider>
	)
}
export { Providers }