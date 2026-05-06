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
      const response = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Data", data);

      if (response.ok) {
        alert("Form Submitted Successfully !!!");
        setFormData(initialValue)
      } else {
        alert("Form Submit Failed !!");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <EnqContext.Provider value={{ formData, setFormData, handleSubmit }}>
      {children}
    </EnqContext.Provider>
  );
};

export const EnContext = () => useContext(EnqContext);
