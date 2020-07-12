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
        <div className="contact">
          <div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/1" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div>
          <div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/2" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div><div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/3" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div><div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/4" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div><div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/5" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div><div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/6" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div><div className="contact-list">
            <div className="contact-list__desc">
              <img src="https://source.unsplash.com/random/7" class="profile-photo circle" alt=""/>
              <div className="offset-left-20">
                <h3> Faisal Amrullah</h3>
                <span>amrullahfaisal@gmail.com</span>
                <br/>
                <span>081806868501</span>
              </div>
            </div>
            <div className="contact-list__action">
              <span>Count : 0</span>
              <button className="btn">Edit</button>
            </div>
          </div>
      </div>
      }
    </div>
  );
}

export default Contacts;
