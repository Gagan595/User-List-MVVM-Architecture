import React from "react";
import { ReusableModal } from "../../../components";
import { useEditUserModalLogic } from "../logic/context";

export const EditUserModalView: React.FC = () => {
  const { user, handleChange, handleSubmit, onClose } = useEditUserModalLogic();

  const inputs = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      value: user?.name ?? "",
      onChange: handleChange,
    },
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      value: user?.username ?? "",
      onChange: handleChange,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "email",
      value: user?.email ?? "",
      onChange: handleChange,
    },
    {
      name: "phone",
      placeholder: "Phone",
      type: "text",
      value: user?.phone ?? "",
      onChange: handleChange,
    },
    {
      name: "website",
      placeholder: "Website",
      type: "text",
      value: user?.website ?? "",
      onChange: handleChange,
    },
    {
      name: "address.street",
      placeholder: "Street",
      type: "text",
      value: user?.address.street ?? "",
      onChange: handleChange,
    },
    {
      name: "address.city",
      placeholder: "City",
      type: "text",
      value: user?.address.city ?? "",
      onChange: handleChange,
    },
    {
      name: "address.zipcode",
      placeholder: "Zipcode",
      type: "text",
      value: user?.address.zipcode ?? "",
      onChange: handleChange,
    },
    {
      name: "company.name",
      placeholder: "Company Name",
      type: "text",
      value: user?.company.name ?? "",
      onChange: handleChange,
    },
  ];

  return (
    <ReusableModal
      title="Edit User"
      inputs={inputs}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
};
