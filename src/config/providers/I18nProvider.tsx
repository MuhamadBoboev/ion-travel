'use client'
import { ReactNode } from "react";
import '../../shared/i18n'

function I18NProvider({ children }: { children: ReactNode }) {

	return <>{children}</>
}

export { I18NProvider }