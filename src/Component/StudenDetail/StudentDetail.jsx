import React from "react";
import { useState } from "react";
import "./StudentDetail.css";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import {db} from "../../firebase"

function StudentDetail() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    class: "1",
    division: "A",
    rollNumber: "",
    address1: "",
    address2: "",
    landmark: "",
    city: "",
    pincode: "",
  });

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
     
      await setDoc(doc(db, "Students"), {
        ...formData,
        timeStamp: serverTimestamp(),
      });
     
      // navigate(-1)
    } catch (err) {
      console.log(err);
    }
  };




  return (
    <div className="studentDetail">
      <div className="header">
        <p>Add Student</p>
        <p>{date}</p>
      </div>
      <div className="line line-1">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
          placeholder="First Name"
        />
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={(event) =>
            setFormData({ ...formData, middleName: event.target.value })
          }
          placeholder="Middle Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
          placeholder="Last Name"
        />
      </div>

      <div className="line line-2">
        <select type="number" name="class"
          value={formData.class}
          onChange={(event) =>
            setFormData({ ...formData, class: event.target.value })
          }>
          <option selected disabled value="Class">
            Class
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <select type="text" name="division"
          value={formData.division}
          onChange={(event) =>
            setFormData({ ...formData, division: event.target.value })
          }>
          <option selected disabled value="Division">
            Division
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <input
          type="number"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={(event) =>
            setFormData({ ...formData, rollNumber: event.target.value })
          }
          placeholder="Enter number in digits"
        />
      </div>
      <div className="line line-3">
        <input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={(event) =>
            setFormData({ ...formData, address1: event.target.value })
          }
          placeholder="Address line 1"
        />
        <input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={(event) =>
            setFormData({ ...formData, address2: event.target.value })
          }
          placeholder="Address line 2"
        />
      </div>
      <div className="line line-4">
        <input
          type="text"
          name="landmark"
          value={formData.landmark}
          onChange={(event) =>
            setFormData({ ...formData, landmark: event.target.value })
          }
          placeholder="Landmark"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={(event) =>
            setFormData({ ...formData, city: event.target.value })
          }
          placeholder="City"
        />
        <input
          type="number"
          name="pincode"
          value={formData.pincode}
          onChange={(event) =>
            setFormData({ ...formData, pincode: event.target.value })
          }
          placeholder="Pincode"
        />
      </div>
      <button type="submit" onClick={handleAdd}>Add Student</button>
      
    </div>
  );
}

export default StudentDetail;
