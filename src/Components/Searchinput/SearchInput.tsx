import React, { useState } from 'react';
import { dummyData, SearchResult } from './dummyData';
import SearchIcon from '/assets/png-icons/Search.png';

/**
 * SearchInput component for displaying a search input field.
 * @param {Object} props - Component props.
 * @param {string} [props.className] - Additional class name(s) for styling purposes.
 * @param {(query: string) => void} props.onSearch - Function to be called when the user performs a search.
 * @param {string} [props.placeholder] - Placeholder text for the search input field.
 * @returns {JSX.Element} SearchInput component.
 */

interface SearchInputProps {
    className?: string;
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className, onSearch, placeholder }) => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const filteredResults: SearchResult[] = dummyData.filter(result =>
        result.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className={`relative flex items-center ${className}`}>
            <input
                type="search"
                value={query}
                placeholder='Search here'
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                className={isFocused ? "h-8 w-full pl-6 pr-10 rounded-full placeholder:absolute placeholder:right-4 placeholder:text-xs border-[2px] border-gray-300 focus:outline-none focus:border-lime-300 relative" :
                 "h-8 w-full pl-6 pr-10 rounded-full placeholder:absolute placeholder:right-10 placeholder:text-xs border-[2px] border-gray-300 focus:outline-none focus:border-lime-300 relative"}
            />
            {isFocused ? '' :<div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleSearch}>
                <img src={SearchIcon} alt="Search Logo" className='w-4' />
            </div>}
            {isFocused && query && (
                <div className="absolute top-full left-0 w-full bg-white shadow p-2 rounded-b-[20px]">
                    {filteredResults.length > 0 ? (
                        filteredResults.map(result => (
                            <p key={result.id}>{result.name}</p>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchInput;