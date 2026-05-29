import axios from "axios";
import { createContext, useContext, useState } from "react";

export const EnqContext = createContext();

export const EnquiryContext = ({ children }) => {
  const initialValue = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/enquiry",
        formData,
      );

      console.log("Data:", response.data);

      if (response.status === 200 || response.status === 201) {
        alert("Form Submitted Successfully !!!");
        setFormData(initialValue);
      }
    } catch (error) {
      console.error(error);
      alert("Form Submit Failed !!");
    }
  };

  return (
    <EnqContext.Provider value={{ formData, setFormData, handleSubmit }}>
      {children}
    </EnqContext.Provider>
  );
};

export const EnContext = () => useContext(EnqContext);
