'use client';
import scss from '../contacts/contacts.module.scss';
import viber from '../../content/images/icons8-viber-50.png';
import whatsapp from '../../content/images/icons8-whatsapp-50.png';
import gmail from '../../content/images/icons8-gmail-50.png';
import Image from 'next/image';

const Contacts = () => {
    return (
       <div className={ scss.contacts }>
         <a href="tel:+380660164636" className={ scss.linkContact }>
            <Image src={ viber } alt='Viber uasoft' className={ scss.viber }/><pre> +38(066)016-46-36</pre>
         </a>
         <a href="tel:+380970077507" className={ scss.linkContact }>
            <Image src={ whatsapp } alt='Whatsapp uasoft' className={ scss.whatsapp }/><pre> +38(097)007-75-07</pre>
         </a>
         <a href="koshovec.vladimir@gmail.com" className={ scss.linkContact }>
            <Image src={ gmail } alt='Gmail uasoft' className={ scss.whatsapp }/><pre> koshovec.vladimir@gmail.com</pre>
         </a>
       </div>
    );
}

export default Contacts;