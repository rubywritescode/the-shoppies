import React from 'react';
import SearchListItem from "../SearchListItem/SearchListItem";
import SearchPreview from "../SearchPreview/SearchPreview";
import "./SearchList.scss";

const SearchList = (props) => {

    const { searchList, searchPreview, setSearchPreview, nominees, setNominees, 
            placeholder, updatePosterSize, removeNominee } = props;

    const handleClick = (id) => {
        const selectedFilm = searchList.filter(film => film.imdbID === id);
        const updatedArray = updatePosterSize(selectedFilm)
        setSearchPreview(updatedArray);
        //TODO: add check to ensure there are results to display
    }

    console.log(searchPreview)

    return (
        <section className="searchListContainer">
            <div className="wrapper">
                {searchList.length > 0 &&
                    <div className="col col-1">
                        <h3>Your Search Results:</h3>
                        <ul>
                            { searchList.map((film) => {
                                return (
                                    <SearchListItem
                                        key={film.imdbID}
                                        id={film.imdbID}
                                        title={film.Title}
                                        year={film.Year}
                                        handleClick={handleClick}
                                    />
                                )})
                            }
                        </ul>
                    </div>
                }
                {searchPreview.length > 0 &&
                    <div className="col col-2">
                        <SearchPreview
                            searchPreview={searchPreview}
                            nominees={nominees}
                            setNominees={setNominees}
                            placeholder={placeholder}
                            removeNominee={removeNominee}
                        />
                    </div>
                }
            </div>
        </section>
    )
}

export default SearchList;