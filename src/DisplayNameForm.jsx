import { useState } from "react";

const DisplayNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [fullName, setFullName] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
      }}
    >
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
          if(firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
          }
        }}
      >
        <h1>Full Name Display</h1>

        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            style={{ padding: "4px" }}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            style={{ padding: "4px" }}
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <button type="submit">submit</button>
      </form>
      
        {fullName && <p style={{ textAlign: "center", fontFamily: "times new roman" }}>{`Full Name: ${fullName}`}</p>}
      
    </div>
  );
};

export default DisplayNameForm;
