'use client';
import scss from '../help/help.module.scss'

const Help = () => {
    return (
            <ul className={ scss.help }>
                <li><a href=''>Допомога</a></li>
                <li><a href=''>Оновлення</a></li>
            </ul>
    );
};


export default Help