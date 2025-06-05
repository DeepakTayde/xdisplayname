import { useState } from "react";

const DisplayNameForm = () => {
  const [formData, setFormData] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          textAlign: "center",
          alignItems: "center",
          fontFamily: "times new roman",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
          });
        }}
      >
        <h1>Full Name Display</h1>

        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            style={{ padding: "4px" }}
            required
            onChange={(e)=>{
                setFormData(
                    {
                    ...formData,
                    firstName: e.target.value
                    }
                )
            }}
          />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            style={{ padding: "4px" }}
            required
                        onChange={(e)=>{
                setFormData(
                    {
                    ...formData,
                    lastName: e.target.value
                    }
                )
            }}
          />
        </label>

        <button type="submit">submit</button>

        {formData?.firstName && formData?.lastName && (
          <h2>{`Full Name: ${formData.firstName} ${formData.firstName}`}</h2>
        )}
      </form>
    </>
  );
};

export default DisplayNameForm;
