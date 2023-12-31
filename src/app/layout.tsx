'use client'
import { Header } from '@/widgets/Header'
import '@styles/index.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/config/providers/Providers'
import { Footer } from '@/widgets/Footer'
// import './../shared/i18n'
import { usePathname } from 'next/navigation'
import { HeaderMain } from '@/widgets/HeaderMainPage'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {

	const pathname = usePathname()
	return (
		<html lang="ru">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body>
				<div className='app-js-group' >
					<Providers>
						{pathname == '/' ? <HeaderMain /> : <Header />}

						<main className={inter.className}>
							{children}
						</main>
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	)
}
