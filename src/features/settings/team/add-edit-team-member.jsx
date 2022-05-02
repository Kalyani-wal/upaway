import React from "react";
import { Formik, Form } from "formik";
import cx from "classnames";
import CollapsiblePanel from "../../../common/components/collapsible-panel/collapsible-panel";
import IconClose from "../../../assets/images/icon-close.png";
import Input from "../../../common/components/input/Input";
import Select from "../../../common/components/select/Select";
import IconFlag from "../../../assets/images/icon-US.png";

const AddEditTeamMember = ({ isOpen, setIsOpen, edit }) => {
  const stylesImg = {
    width: "20px",
    marginRight: "8px",
    marginTop: "-4px",
  };
  const stylesUTC = {
    color: "#667085",
    paddingLeft: "8px",
  };
  const countryOptions = [
    {
      value: "United States",
      label: [
        <img src={IconFlag} alt="Avatar" style={stylesImg} />,
        "United States",
      ],
    },
    {
      value: "United Kingdom",
      label: [
        <img src={IconFlag} alt="Avatar" style={stylesImg} />,
        "United States",
      ],
    },
    {
      value: "United States",
      label: [
        <img src={IconFlag} alt="Avatar" style={stylesImg} />,
        "United States",
      ],
    },
    {
      value: "United Kingdom",
      label: [
        <img src={IconFlag} alt="Avatar" style={stylesImg} />,
        "United States",
      ],
    },
  ];
  const timezoneOptions = [
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: [
        "Pacific Standard Time (PST)",
        <span style={stylesUTC}>UTC−08:00</span>,
      ],
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: [
        "Pacific Standard Time (PST)",
        <span style={stylesUTC}>UTC−08:00</span>,
      ],
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: [
        "Pacific Standard Time (PST)",
        <span style={stylesUTC}>UTC−08:00</span>,
      ],
    },
    {
      value: "Pacific Standard Time (PST) UTC−08:00",
      label: [
        "Pacific Standard Time (PST)",
        <span style={stylesUTC}>UTC−08:00</span>,
      ],
    },
  ];
  const tripSupport = [
    {
      value: "Trip Support",
      label: "Trip Support",
    },
    {
      value: "Trip Support",
      label: "Trip Support",
    },
    {
      value: "Trip Support",
      label: "Trip Support",
    },
  ];
  return (
    <CollapsiblePanel
      isOpen={isOpen}
      className="panel-travel-credits panel-add-team-member"
    >
      <div className="section-header">
        <h3>{edit ? "Edit" : "Add"} Team Member</h3>
        <span onClick={() => setIsOpen(false)}>
          <img src={IconClose} alt="Icon Close" />
        </span>
      </div>
      <Formik>
        <Form className="form-team-member">
          <div className="container-fileds">
            <Input label="Name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Phone" type="phone" />
            <Select label="Country" name="country" options={countryOptions} />

            <Select
              label="Timezone"
              name="timezone"
              wrapperClassName="select-timezone"
              options={timezoneOptions}
            />
            <Select
              label="Permission"
              name="permission"
              options={tripSupport}
            />
          </div>
          <div className="butons-wrapper">
            <button className="button btn-small btn-smaller btn-transparent">
              Cancel
            </button>
            <button className={cx("button btn-small btn-save", {"btn-team" : !edit})}>
              {edit ? "Save" : "Add Team Member"}
            </button>
          </div>
        </Form>
      </Formik>
    </CollapsiblePanel>
  );
};

export default AddEditTeamMember;
