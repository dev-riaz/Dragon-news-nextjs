'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
;

const NavLink = ({href,children}) => {
    const PathName=usePathname()
    console.log('paaathname',PathName);
    const isActive=href===PathName
    
    return (
        <Link href={href} className={`${isActive?"border-b-2 border-b-blue-600":""}`}>
            {children}
        </Link>
    );
};

export default NavLink;