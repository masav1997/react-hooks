import { useState } from "react";

export function FormExample() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(21);

  return (
    <form>
      <input
        name="firstName"
        type="text"
        value={firstName}
        onClick={() => console.log("обработчик")}
      />
    </form>
  );
}
