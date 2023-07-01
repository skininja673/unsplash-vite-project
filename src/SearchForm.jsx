import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
    const { setSearchTerm, searchTerm } = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('e: ', e.target.elements.search.value);
        const searchValue = e.target.elements.search.value;

        // if nothing is typed then return nothing
        if (!searchValue) return;
        setSearchTerm(searchValue);
        console.log('search value: ', searchValue);
    };
    return (
        <section>
            <h1 className='title'>search unsplash images</h1>
            <form className='search-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='form-input search-input'
                    placeholder='cat'
                    name='search'
                />
                <button type='submit' className='btn'>
                    search
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
