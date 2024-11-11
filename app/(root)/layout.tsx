import React from 'react'
import SideBar from "@/components/shared/SideBar";
import MobileNav from "@/components/shared/MobileNav";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <main className='root'>
            <SideBar />
            <MobileNav />
            <div className='root-container'>
                <div className='wrapper'>
                    {children}
                </div>
            </div>
        </main>
    )
}
export default Layout