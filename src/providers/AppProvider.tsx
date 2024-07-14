'use client'
import { FC, PropsWithChildren } from 'react'
import QueryProvider from './QueryProvider'

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
	return <QueryProvider>{children}</QueryProvider>
}

export default AppProvider
