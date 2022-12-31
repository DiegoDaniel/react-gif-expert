import { useState } from 'react';

export const AddCategory = (/* { setCategories } */ { onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        setInputValue('');
        onNewCategory( inputValue.trim() )
        /* setCategories( (categories) => [inputValue, ...categories] ) */
        
    }


    return (
        <form onSubmit={ handleOnSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}
