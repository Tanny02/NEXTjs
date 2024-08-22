"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });
      router.refresh();
      router.push("/");
    } catch (error) {
      setErrorMessage("Error creating user: " + error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3"
        method="post"
      >
        <h1>Create New User</h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Username"
          required
          className="rounded-xl p-4"
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="Email Address"
          required
          className="rounded-xl p-4"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="Password"
          required
          className="rounded-xl p-4"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 rounded-xl p-4 px-20"
        />
      </form>
      <p>{errMessage}</p>
    </>
  );
};

export default UserForm;
