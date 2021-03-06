import React from "react";
import { Formik, Form } from "formik";
import Input from "../../../common/components/input/Input";
import IconEmail from "../../../assets/images/icon-email.png";

const Password = () => {
  return (
    <div className="container-password">
      <div className="division-settings header-tab-content-settings">
        <div>
          <h3 className="title">Password</h3>
          <span className="description">Update your password here</span>
        </div>
        <div className="section-buttons">
          <button className="button btn-small btn-smaller btn-transparent">
            Cancel
          </button>
          <button className="button btn-small btn-smaller">Save</button>
        </div>
      </div>
      <Formik>
        <Form>
          <div className="division-settings">
            <div className="input-holder">
              <Input
                type="email"
                label="Email address"
              />
              <img src={IconEmail} alt="Email Icon" />
            </div>
          </div>
          <div className="division-settings">
            <Input type="password" label="Current Password" />
            <Input type="password" label="New Password" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Password;
