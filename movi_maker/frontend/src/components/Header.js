import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Desde el boton  llamo a otro componente  mediante el id para este caso id ='addmovie' declarado en el div de l componente AddMovie
const Header = () => {
    return (
        <div className='topnav' id='header'>
            <a href='/#'>Movie maker</a>
            <Link smooth to='#addmovie' className='add-button'>Add Movie</Link>
        </div>
    )
}
export default Header