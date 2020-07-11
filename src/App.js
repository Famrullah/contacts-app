import React, {useEffect} from 'react';
import { fetchContacts } from "./store/actions/index";
import { useDispatch,useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  
  const {data,isLoadingData} = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);

  return (
    <div className="App">
      {isLoadingData?<div>loading</div>:<div>ini contoh aja</div>}
    </div>
  );
}

export default App;
