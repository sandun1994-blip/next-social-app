import React from 'react';
import Navbar from '../Navbar/Navbar';

//tfcd


const Layout:React.FC = ({children}) => {
    
    return (<>
    <Navbar/>
    <main>
    {children} 
    </main>
   
    </>)
}
export default Layout;