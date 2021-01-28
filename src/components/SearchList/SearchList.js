import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

const SearchList = () =>{

const dispatch = useDispatch();
const searchReducer = useSelector(store => store.SOMETHINGREDUCER)


useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the search items from api
        dispatch({type:'NULL'})
    }, []); 


        return(
            <div>
                <h2>Search Results</h2>
                 {searchReducer.map((searchItem) =>{
                     return(
                        <ul>
                            <li>
                            <p></p>
                                <img src={searchItem.data?.image_url} width="400" height="300"></img>
                            </li>
                        </ul>
                     )
                 })}
            </div>
        )
}

export default SearchList;