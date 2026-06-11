"use client";
import React, { useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [disable, setdisable] = useState(false)

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    setdisable(true);
    try{
      
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: process.env.NEXT_PUBLIC_WEB_API_KEY,
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      })
      if(response.data.success){
        setFormData(defaultFormState);
        toast.success("Thank you, I'll get back to you as soon as possible.");
      }
      else{
        toast.error("Something went wrong please try again later.");
      }
    }
    catch(error){
      toast.error("Something went wrong please try again later.");
      console.error("Error in mailing error:");
    }
    setdisable(false);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-[var(--card-bg)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] px-3 py-2 rounded-md text-sm text-[var(--text-primary)] w-full placeholder-[var(--text-tertiary)]"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-[var(--card-bg)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] px-3 py-2 rounded-md text-sm text-[var(--text-primary)] w-full placeholder-[var(--text-tertiary)]"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-[var(--card-bg)] border border-[var(--card-border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] px-3 mt-4 py-2 rounded-md text-sm text-[var(--text-primary)] w-full placeholder-[var(--text-tertiary)]"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button
        disabled={disable}
        className="w-full submit px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
  );
};
