/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const CollapseRound = ({size, ...props}) => (
  <svg viewBox="0 0 256 256" fill="currentColor" width={ size || "256" } height={ size || "256" } {...props}>
    <path d="M94.423 58.88C91.3475 55.1332 85.7382 54.7414 82.0613 58.0565 78.3917 61.3483 77.9918 67.0667 81.0232 70.9028L81.1026 71.0032 121.398 113.912C122.974 115.836 125.432 117 128.001 117 130.627 117 133.066 115.791 134.721 113.776L174.766 71.1563 174.842 71.0614C176.279 69.2602 177 67.1846 177 65.031 177 62.4068 175.93 59.8466 173.932 58.0523 170.201 54.6885 164.6 55.1929 161.444 59.0299L128.001 94.1403 94.423 58.88zM161.577 197.12C164.652 200.867 170.262 201.259 173.939 197.943 177.608 194.652 178.008 188.933 174.977 185.097L174.897 184.997 134.602 142.088C133.026 140.164 130.568 139 127.999 139 125.373 139 122.934 140.209 121.279 142.224L81.2337 184.844 81.158 184.939C79.7209 186.74 78.9999 188.815 78.9999 190.969 78.9999 193.593 80.0701 196.153 82.0683 197.948 85.7986 201.311 91.3997 200.807 94.5559 196.97L127.999 161.86 161.577 197.12z"
      fill="currentColor" />
    <path d="M256 128C256 198.692 198.692 256 128 256C57.3076 256 0 198.692 0 128C0 57.3076 57.3076 0 128 0C198.692 0 256 57.3076 256 128ZM240 128C240 189.856 189.856 240 128 240C66.1441 240 16 189.856 16 128C16 66.1441 66.1441 16 128 16C189.856 16 240 66.1441 240 128Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
CollapseRound.displayName = 'CollapseRound';
CollapseRound.propTypes = {
  size: PropTypes.string
}
export default CollapseRound;
/* tslint:enable */
/* eslint-enable */