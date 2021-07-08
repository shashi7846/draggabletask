import React,{useState,useEffect} from 'react';
import { Updateuserbyid,Getuserbyid } from './axios';


function Update(props) {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [gender, setGender] = useState();
    let [city, setCity] = useState();
    let [contact, setContact] = useState();
    let [zip, setZip] = useState();
  
    
   
    useEffect(async () => {
        let user = await Getuserbyid(props.match.params.id);
        setName(user.data.name);
        setEmail(user.data.email);
        setGender(user.data.gender);
        setCity(user.data.city);
        setContact(user.data.contact);
        setZip(user.data.zip);
       
      }, []);
      
      

      let userData = {
         name,
         email,
         gender,
         city,
        contact,
         zip,
      };


    return (
        <>
         <form 
      onSubmit={async(e)=>{
        e.preventDefault();
            console.log(userData);

            await Updateuserbyid(props.match.params.id,userData);

            setName("");
            setEmail("");
            setContact("");
            setGender("");
            setZip("");
            setCity("");
            
      }}
      >
        <div className="container">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="input">Name</label>
              <input
                type="text"
                class="form-control"
                id="input"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div class="form-group col-md-4">
            <label for="gender">Gender{gender}</label>

            {/* <select
              id="gender"
              class="form-control"
              value={gender}
              required
              onchange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option selected>Male</option>
              <option>Female</option>
              <option>Others</option>
            </select> */}
             <select id="location" class="form-control" required onChange={(e) => {
                            setGender(e.target.value);
                        }} >
                           <option>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">City</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

            <div class="form-group col-md-2">
              <label for="inputcontact">Contact</label>
              <input
                type="text"
                class="form-control"
                id="inputcontact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input
                type="text"
                class="form-control"
                id="inputZip"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" type="submit">
          Update
        </button>
       
      </form>
        </>
    )
}

export default Update;
