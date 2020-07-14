import React, {useEffect,Suspense} from 'react';
import { fetchContacts } from "../../store/actions";
import { useDispatch,useSelector } from 'react-redux'

const ContactList = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./contact-list')), 2000);
  });
});

function Contacts() {
  const dispatch = useDispatch()
  
  // global state from redux
  const {data} = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);

  return (
    <div className="contacts-app-container">
      <Suspense fallback={<div>loading</div>}>
        <ContactList 
          data ={data}
        />
      </Suspense>
    </div>
  );
}

export default Contacts;
