import React from 'react';
import { useState } from 'react'
import "./Register.css"

// Name,
//   Email,
//   Gender,
//   Address,
//   Country,
//   State,
//   City,
//   DOB,
//   Marital,
//   Year_of_passing,
//   Designation,
//   Company_name,
//   Company_address,
//   Domain,
//   Contribute,
//   Topic

export default function Register() {

    const [data, setdata] = useState({
        Name: "",
        Email: "",
        Gender: "",
        Address: "",
        Country: "",
        State: "",
        City: "",
        DOB: "",
        Marital: "",
        Year_of_passing: "",
        Designation: "",
        Company_name: "",
        Company_address: "",
        Domain: "",
        Contribute: "",
        Topic:""
    });

 const [img, setpic] = useState("");
 const [picloading, setpicloading] = useState(false);



    const SubmitHandler = async (event) => {
      event.preventDefault();
      
        const {
          Name,
          Email,
          Gender,
          Address,
          Country,
          State,
          City,
          DOB,
          Marital,
          Year_of_passing,
          Designation,
          Company_name,
          Company_address,
          Domain,
          Contribute,
          Topic,
        } = data;
        setpicloading(true);
      if (!Name || !Topic || !img ||
          !Email||
            !Gender ||
            !Address ||
            !Country ||
            !State ||
            !City ||
            !DOB ||
            !Marital ||
            !Year_of_passing ||
            !Designation ||
            !Company_name ||
            !Company_address ||
            !Domain ||
            !Contribute) {

          alert("Fill all the field")
            setpicloading(false);
            return;
        }

           const res= await fetch(
              "https://allumnissgmce-default-rtdb.firebaseio.com/allumnidata.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  Name,
                  Email,
                  Gender,
                  Address,
                  Country,
                  State,
                  City,
                  DOB,
                  Marital,
                  Year_of_passing,
                  Designation,
                  Company_name,
                  Company_address,
                  Domain,
                  Contribute,
                  Topic,
                  img,
                }),
              }
            );

      if (res) {
             setdata({
               Name: "",
               Email: "",
               Gender: "",
               Address: "",
               Country: "",
               State: "",
               City: "",
               DOB: "",
               Marital: "",
               Year_of_passing: "",
               Designation: "",
               Company_name: "",
               Company_address: "",
               Domain: "",
               Contribute: "",
               Topic: "",
             });
        alert("Registration Successful")
      } else {
        alert("DO THE STUFF AGAIN")
           }

    };


  const PostDetail = (pics) => {
    setpicloading(true);
    if (pics === undefined) {
      alert("please select a single image");
      setpicloading(false);
    }

    if (pics.type === "image/png" || pics.type === "image/jpeg" || pics.type=== "image/jpg") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dnixu4d4g");
      fetch("https://api.cloudinary.com/v1_1/dnixu4d4g/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setpic(data.url.toString());
          console.log("->", img);
          console.log(data.url.toString());
          setpicloading(false);
          alert("pic uploaded successfully");
        })
        .catch((err) => {
          setpicloading(false);
          console("unable to upload pic");
        });
    } else {
      setpicloading(false);
      alert("Select the proper image extension eg:png/jpeg");
    }
  };


const OnchangeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
};

return (
  <>
    <div className="formcontainer">
      <form action="">
        <h1>Registration from</h1>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="Name"
          value={data.Name}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Enter Your Email</label>
        <input
          type="email"
          placeholder="Enter You Email"
          name="Email"
          value={data.Email}
          onChange={OnchangeHandler}
        />
        <div >
          <label htmlFor="">Gender</label>
          <div className='Gender' onChange={OnchangeHandler}>
            <input
              type="radio"
              value="data.Male"
              name="Gender"
              onChange={OnchangeHandler}
            />{" "}
            Male
            <input
              type="radio"
              value="data.Female"
              name="Gender"
              onChange={OnchangeHandler}
            />{" "}
            Female
            <input
              type="radio"
              value="data.Other"
              name="Gender"
              onChange={OnchangeHandler}
            />{" "}
            Other
          </div>
        </div>

        <label htmlFor="">Address</label>
        <input
          type="text"
          name="Address"
          value={data.Address}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Country</label>
        <input
          type="text"
          placeholder="Which Are Your From"
          name="Country"
          value={data.Country}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">which State You Are From</label>
        <input
          type="text"
          placeholder="State You are from"
          name="State"
          value={data.State}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">City</label>
        <input
          type="text"
          placeholder="City You are from"
          name="City"
          value={data.City}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Date of Birth</label>
        <input
          type="Date"
          name="DOB"
          value={data.DOB}
          onChange={OnchangeHandler}
        />

        <label htmlFor=""> Marital Status</label>
        <input
          type="text"
          name="Marital"
          placeholder="Married/Unmarried"
          value={data.Marital}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Year Of Passout</label>
        <input
          type="text"
          placeholder="Year Of Passing"
          name="Year_of_passing"
          value={data.Year_of_passing}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Profile Photo</label>
        <input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => PostDetail(e.target.files[0])}
        />

        <label htmlFor="">Designamtion</label>
        <input
          type="text"
          placeholder="You Designation"
          name="Designation"
          value={data.Designation}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Company Name</label>
        <input
          type="text"
          name="Company_name"
          value={data.Company_name}
          placeholder="Your Company name"
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Area of Domain</label>
        <input
          type="text"
          placeholder="Domain"
          name="Domain"
          value={data.Domain}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Company Address</label>
        <input
          type="text"
          placeholder="Company_address"
          name="Company_address"
          value={data.Company_address}
          onChange={OnchangeHandler}
        />

        <label htmlFor="">Willing To contribute</label>
        <input
          type="text"
          placeholder="yes/no"
          name="Contribute"
          value={data.Contribute}
          onChange={OnchangeHandler}
          id=""
        />

        <label htmlFor="">Guest Lecture topic</label>
        <input
          type="text"
          name="Topic"
          value={data.Topic}
          placeholder="ex:- intershiop,placement,scholarship"
          onChange={OnchangeHandler}
        />

        <button type="submit" onClick={SubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  </>
);
}
