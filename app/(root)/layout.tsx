import React from 'react';
import {Navbar} from "@/components/Navbar";
import {Toaster} from "@/components/ui/sonner";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Navbar/>
                {children}

        </>
    );
};

export default Layout;