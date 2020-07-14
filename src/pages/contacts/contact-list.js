import React,{useState} from 'react'
import { success } from "../../store/actions";
import { useDispatch } from 'react-redux'

const ContactList = (props) => {
    const dispatch = useDispatch()
    const {data} = props
    const [formValue,setformValue] = useState({
        Id:'',
        Email:'',
        Mobile:''
    })
    const [count,setCount] = useState(null)
    const [isEdit,setIsEdit] = useState(false)

    const increment = value => {
        if(value.UpdatedBy == null){
            value.UpdatedBy = true
            setCount({
                ...count,
                [value.Id]: 1
            })
        }else{
            setCount({
                ...count,
                [value.Id]: count[value.Id]+1
            })
        }
    }



    const saveContacts = (value) => {
        value.Email = formValue.Email
        value.Mobile = formValue.Mobile
        value.UpdateTs = !value.UpdateTs
        setIsEdit(!isEdit)
        dispatch(success())
    }

    // on change form input
    const handleForm = (e) =>{
        setformValue({
            ...formValue,
            [e.target.name]:e.target.value
        })
        console.log(e.target.name)
    }

     //Show Form Edit if edit button has been clicked
     const editContacts = (value) => {
        setIsEdit(!isEdit)
        setformValue({
            Id:value.Id,
            Email:value.Email,
            Mobile:value.Mobile
        })
        if(value.UpdateTs == null){
          value.UpdateTs = true
        }else{
          value.UpdateTs = !value.UpdateTs
        }
    }

    return(
        <div className="contact">
            {data.data.map((item,index)=> (
               <div className="contact-list" key={index}>
                <div className="contact-list__desc">
                    <img src={`https://source.unsplash.com/random/${index}`} className="profile-photo circle" alt=""/>
                    <div className="offset-left-20">
                        <h3 className="offset-bottom-10 crs-pointer" onClick={() => increment(item)}> {item.Name}</h3>
                        {item.UpdateTs && isEdit? 
                            <React.Fragment>
                                <input name="Email" onChange={handleForm} value={formValue.Email}></input>
                                <input name="Mobile" onChange={handleForm} value={formValue.Mobile}></input>
                            </React.Fragment>:
                            <React.Fragment>
                                <p>{item.Email}</p>
                                <p>{item.Mobile}</p>
                            </React.Fragment>
                        }
                    </div>
                </div>
                <div className="contact-list__action">
                 <span>Count : {(item.UpdatedBy === null )?0: count[item.Id]}</span>
                 {item.UpdateTs ?
                    <button className="btn" onClick={()=>saveContacts(item)} >Save</button>:
                    <button className={isEdit?'disabled btn':'btn'} disabled ={(isEdit)? "disabled" : ""} onClick={()=>editContacts(item)} >Edit</button>
                 }
               </div>
               </div>
            ))}
        </div>
    )
}

export default ContactList
