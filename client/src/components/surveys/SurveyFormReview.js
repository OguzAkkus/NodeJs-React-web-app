// SurveyFormReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back 
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
    return {};

}

export default connect(mapStateToProps)(SurveyFormReview);