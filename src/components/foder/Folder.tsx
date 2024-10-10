'use client';
import scss from '../foder/folder.module.scss';

const Folder = ( {children}:any ) => {
    return (
        <div className={scss.folder}>
            {children}
        </div>
    );
}


export default Folder;