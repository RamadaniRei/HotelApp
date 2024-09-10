import React from "react";

import PropTypes from "prop-types";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateSelector = (props) => {
  const {
    checkinDate,
    checkoutDate,
    totalDays,
    onCheckinChange,
    onCheckoutChange,
    invalidRange,
  } = props;

  return (
    <div>
      <h2>Date Range</h2>

      <DatePicker selected={checkinDate} onChange={onCheckinChange} />
      <DatePicker selected={checkoutDate} onChange={onCheckoutChange} />

      <span>{totalDays} nights</span>

      {/* Show invalid date range message if invalidRange is true */}
      {invalidRange && (
        <p style={{ color: "red" }}>
          Invalid Date Range: please select a valid range between 1 and 9
          nights.
        </p>
      )}
    </div>
  );
};

DateSelector.propTypes = {
  checkinDate: PropTypes.instanceOf(Date).isRequired,
  checkoutDate: PropTypes.instanceOf(Date).isRequired,
  onCheckinChange: PropTypes.func.isRequired,
  onCheckoutChange: PropTypes.func.isRequired,
  totalDays: PropTypes.number.isRequired,
  invalidRange: PropTypes.bool.isRequired,
};

export default DateSelector;
