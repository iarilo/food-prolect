import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCategories } from '../api';
import { FanPreloader } from '../main sections/preloader';
import { FanCategoryList } from './file-category-list';
import { FanSearch } from './search/file-search';
import { CheckboxFilter } from './search/checkbox-filter';
import { FanCategory } from './categories';
import { Context } from '../main sections/wraper context';

export const FanHome = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const getSearch = searchParams.get('search');
  const { newValue, stateCheck } = useContext(Context);
  //console.log('stateCheck', stateCheck);
  
  console.log('stateCheck FanHome :', stateCheck);

  const handleSearch = useCallback(
    (str) => {
      setFilteredCatalog(
        catalog.filter((item) =>
          item.strCategory.toLowerCase().includes(str.toLowerCase())
        )
      );
    },
    [catalog]
  );

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);

      setFilteredCatalog(
        getSearch
          ? data.categories.filter((item) =>
            item.strCategory.toLowerCase().includes(getSearch.toLowerCase())
          )
          : data.categories
      );
    });
  }, [getSearch]);

/*   useEffect(()=>{
    const toggle = ()=>{
      if (stateCheck) {
        <FanCategory dataValue={newValue} stateCheck={stateCheck} />
      } else { <FanCategoryList catalog={filteredCatalog} />}
    }
  }, [stateCheck]) */

  return (
    <div className="canteiner_home">
      <div >
        <FanSearch cb={handleSearch} setSearchParams={setSearchParams} />
        {/*  <FanCategory dataValue={newValue} />  */}

        <CheckboxFilter catalog={catalog} />
      </div  >

      {!catalog
        ? (<FanPreloader />)

        : (<div className="container_filtr_categorii"  >

          {!stateCheck
            ? (<FanCategoryList catalog={filteredCatalog} />) 
            : (<FanCategory dataValue={newValue} stateCheck={stateCheck} />) }

        </div>
        )}

                {/*     {!catalog ? (<FanPreloader />): (toggle())} */}
    </div>
  );
};
