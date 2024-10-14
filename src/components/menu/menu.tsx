'use client';
import scss from '../menu/menu.module.scss';
import Help from '../help/Help';

const Menu = () => {
    return (
        <menu className='flex mr-auto ml-auto '>
            <ul className={scss.menu}>
                <li><a href=''>Гарячі пропозиції</a></li>
                <li><a href=''>Для бізнесу</a></li>
                <li><a href=''>Бюджетним установам</a></li>
                <li><a href=''>Послуги</a></li>
                <li><a href=''>Про нас</a></li>
            </ul>
            <Help/>
        </menu>
    );
}


export default Menu;