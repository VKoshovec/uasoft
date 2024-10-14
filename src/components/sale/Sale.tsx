'use client';
import Image from 'next/image';
import scss from '../sale/sale.module.scss'; 
import banner from '../../content/images/banner1.webp';


const Sale = () => {
    return (
        <div className={scss.sale}>
            <div className={scss.thumb}>
                <Image src={ banner} alt='Ukraine' className={scss.bannerImage}/>
            </div>
        </div>
    );
}


export default Sale;