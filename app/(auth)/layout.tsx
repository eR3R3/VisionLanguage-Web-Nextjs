import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <main className='auth'>
            {children}
        </main>
    )
}
export default Layout