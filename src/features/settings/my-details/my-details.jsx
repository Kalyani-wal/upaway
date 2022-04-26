import React from "react";
import Input from "../../../common/components/input/Input";
import Select from "../../../common/components/select/Select";
import FileUpload from "../../../common/components/file-upload/file-upload";
import Avatar from "../../../assets/images/avatar-profile.png";
import { Formik, Form } from "formik";

const MyDeatils = () => {
  const countryOptions = [
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "United Kingdom",
      label: "United States",
    },
    {
      value: "United States",
      label: "United States",
    },
    {
      value: "United Kingdom",
      label: "United States",
    },
  ];
  const timezoneOptions = [
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: "Pacific Standard Time (PST) UTC−08:00",
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: "Pacific Standard Time (PST) UTC−08:00",
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: "Pacific Standard Time (PST) UTC−08:00",
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: "Pacific Standard Time (PST) UTC−08:00",
    },
  ];
  return (
    <div className="container-my-details">
      <div className="division-settings header-tab-content-settings">
        <div>
          <h3 className="title">Personal info</h3>
          <span className="description">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="section-buttons">
          <button className="button btn-small btn-smaller btn-transparent">
            Cancel
          </button>
          <button className="button btn-small btn-smaller">Save</button>
        </div>
      </div>
      <Formik>
        <Form className="container-form">
          <div className="division-settings division-full-name">
            <label className="label">Name</label>
            <div>
              <Input type="text" label="Name" />
              <Input type="text" label="LastName" />
            </div>
          </div>
          <div className="division-settings">
            <Input type="email" label="Email address" />
          </div>
          <div className="division-settings division-file-upload">
            <div className="label">
              Your photo
              <span>This will be displayed on your profile.</span>
            </div>
            <div className="container-upload">
              <img src={Avatar} alt="My Avatar" />
              <FileUpload />
            </div>
          </div>
          <div className="division-settings">
            <Input type="text" label="Role" />
          </div>
          <div className="division-settings">
            <Select label="Country" name="country" options={countryOptions} />
          </div>
          <div className="division-settings">
            <Select
              label="Timezone"
              name="timezone"
              wrapperClassName="select-timezone"
              options={timezoneOptions}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MyDeatils;
