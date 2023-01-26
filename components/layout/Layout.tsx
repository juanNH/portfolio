import { ReactElement } from 'react'
import Navbar from './navbar/Navbar'

const Layout = ({ children }: { children: ReactElement; }) => {
    return (
        <>
            {/* <Navbar /> */}
            {children}
        </>
    )
}

export default Layout