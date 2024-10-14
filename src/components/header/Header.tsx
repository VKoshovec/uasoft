'use client';
import Image from 'next/image';
import logo from '../../content/images/Logo.png';
import sab from '../../content/images/SAB.png';
import Contacts from '../contacts/Contacts';

const Header = () => {

    const totalh = 70;

    return (
        <header className="ml-auto mr-auto flex justify-between w-5/6 mt-5 mb-0">
            <Image alt='logo' src={logo} height={ totalh }/>
            <Contacts/>
            <Image alt='sab'src={sab}  height={50}/>          
        </header>
    );
}


export default Header;