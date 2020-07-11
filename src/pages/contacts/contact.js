import React, {useEffect} from 'react';
import { fetchContacts } from "../../store/actions";
import { useDispatch,useSelector } from 'react-redux'

function Contacts() {
  const dispatch = useDispatch()
  
  const {isLoadingData} = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch]);

  return (
    <div className="contacts-app-container">
      {isLoadingData?<div>loading</div>:
        <div className="grid-container container--fit">
          <div className="contact-list">
            <div className="contact-list__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="contact-list__action">
              <p>Count : 0</p>
              <button className="btn">Edit</button>
            </div>
          </div>
      </div>
      }
    </div>
  );
}

export default Contacts;
