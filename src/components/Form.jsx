import React, { useState } from "react";

const Form = () => {
  const [allData, setAllData] = useState();

  const [formData, setFormData] = useState({});

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleForm} className="max-w-sm max border-2 p-5">
      <p className="text-2xl font-semibold text-center">
        Password Encrypt / Decrypt 🔒
      </p>
      <input
        type="text"
        placeholder="Web Name"
        name="webName"
        onChange={(e) =>
          setFormData((pre) => ({ ...pre, webName: e.target.value }))
        }
        required
        className="border-2 border-gray-400 w-full px-3 py-1 outline-none my-5"
      />
      <input
        type="url"
        placeholder="Ex https://www.example.com"
        name="webUrl"
        onChange={(e) =>
          setFormData((pre) => ({ ...pre, webUrl: e.target.value }))
        }
        required
        className="border-2 border-gray-400 w-full px-3 py-1 outline-none my-5"
      />
      <input
        type="text"
        placeholder="User Name"
        name="userName"
        onChange={(e) =>
          setFormData((pre) => ({ ...pre, userName: e.target.value }))
        }
        required
        className="border-2 border-gray-400 w-full px-3 py-1 outline-none my-5"
      />
      <input
        type="password"
        placeholder="Enter Your Password"
        name="password"
        onChange={(e) =>
          setFormData((pre) => ({ ...pre, password: e.target.value }))
        }
        required
        className="border-2 border-gray-400 w-full px-3 py-1 outline-none my-5"
      />

      <textarea
        rows={4}
        className="border-2 border-gray-400 w-full p-2"
      ></textarea>

      <button type="submit" className="px-4 py-1 bg-green-500/25 rounded ">
        Encrypt & Save 📁
      </button>
    </form>
  );
};

export default Form;
