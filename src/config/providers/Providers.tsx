import { ReactNode } from 'react'
import { ReduxProvider } from './ReduxProvider'

function Providers({ children }: { children: ReactNode }) {
	return (
		<ReduxProvider>
			{children}
		</ReduxProvider>
	)
}
export { Providers }