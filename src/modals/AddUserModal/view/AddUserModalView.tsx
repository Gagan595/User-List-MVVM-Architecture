import React from "react";
import { ReusableModal } from "../../../components";
import { useAddUserModalLogic } from "../logic/context";

export const AddUserModalView: React.FC = () => {
  const { newUser, handleChange, handleSubmit, onClose } =
    useAddUserModalLogic();

  const inputs = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      value: newUser.name,
      onChange: handleChange,
    },
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      value: newUser.username,
      onChange: handleChange,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      value: newUser.email,
      onChange: handleChange,
    },
    {
      name: "phone",
      placeholder: "Phone",
      type: "text",
      value: newUser.phone,
      onChange: handleChange,
    },
    {
      name: "website",
      placeholder: "Website",
      type: "text",
      value: newUser.website,
      onChange: handleChange,
    },
    {
      name: "address.street",
      placeholder: "Street",
      type: "text",
      value: newUser.address.street,
      onChange: handleChange,
    },
    {
      name: "address.city",
      placeholder: "City",
      type: "text",
      value: newUser.address.city,
      onChange: handleChange,
    },
    {
      name: "address.zipcode",
      placeholder: "Zipcode",
      type: "text",
      value: newUser.address.zipcode,
      onChange: handleChange,
    },
    {
      name: "company.name",
      placeholder: "Company Name",
      type: "text",
      value: newUser.company.name,
      onChange: handleChange,
    },
  ];

  return (
    <ReusableModal
      title="Add User"
      inputs={inputs}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
