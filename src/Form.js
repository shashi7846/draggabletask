import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Postuser } from "./axios";
function Form() {
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [gender, setGender] = useState();
  let [city, setCity] = useState();
  let [contact, setContact] = useState();
  let [zip, setZip] = useState();

  let userData = {
    name: name,
    email: email,
    gender: gender,
    city: city,
    contact: contact,
    zip: zip,
  };

  let history = useHistory();

  // useEffect(async () => {}, []);

  return (
    <>
      <form 
      onSubmit={async(e)=>{
        e.preventDefault();
            console.log(userData);

            await Postuser(userData);

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
              <label for="mobile">Contact</label>
              <input
                type="tel"
                class="form-control"
                id="mobile"
                required
                placeholder="mobile number"
                pattern="[0-9]{10}"
                                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (e.target.value.length > 10) {
                    
                  }
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
          Add User
        </button>
        <button class="btn btn-primary"  onClick={()=>{history.push("/")}}>
          Home
        </button>
      </form>
    </>
  );
}

export default Form;
