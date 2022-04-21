import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import IconCalendar from "../../../assets/images/icon-calendar.png";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calendar = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="container-calendar container-filters">
      <Dropdown toggle={toggle} isOpen={dropdownOpen}>
        <DropdownToggle className="btn-filter btn-calendar">
          <img src={IconCalendar} alt="Bars Icon" />
          <span>Select dates</span>
        </DropdownToggle>
        <DropdownMenu>
          <div className="calendar-wrapper">
            <DateRangePicker
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
            />
            <div className="container-buttons">
              <button className="button btn-small btn-transparent">
                Cancel
              </button>
              <button className="button btn-small">Apply</button>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Calendar;
