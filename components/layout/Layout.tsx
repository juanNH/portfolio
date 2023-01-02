import { ReactElement } from 'react'
import Navbar from './navbar/Navbar'

const Layout = ({ children }: { children: ReactElement; }) => {
    return (
        <>
            <Navbar />
            <h1 className='text-red-900'></h1>
            {children}
        </>
    )
}

export default Layout