import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from "../helpers/getHeroesByName";

export const SearchHeroes = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //if(searchText.trim().length < 2) return;

    navigate(`?q=${searchText}`);
  }
  
  return (
    <div className="p-4">
      <h1>Search Heroes</h1>
      <hr />

      <div className="row mt-4">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              className="form-control"
              placeholder="Search a hero"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          {
            q === ''  
            ? <div className="alert alert-primary">Search a hero</div>
            : (heroes.length === 0) 
              && <div className="alert alert-danger">No results found for <b>{ q }</b></div>
          }

          {
            heroes.map(hero => <HeroCard key={hero.id} {...hero}/>)
          }
        </div>
      </div>
    </div>
  );
};
