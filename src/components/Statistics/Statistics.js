import PropTypes from "prop-types";
import s from "./Statistics.module.css";

// import s from './Friendlist.module.css';

const Statistics = ({ good, neutral, bad, total, percantage }) => {
  return (
    <ul className={s.list}>
      <li>
        <p className={s.item}>Good: {good}</p>
      </li>
      <li>
        <p className={s.item}>Neutral: {neutral}</p>
      </li>
      <li>
        <p className={s.item}>Bad: {bad}</p>
      </li>
      <li>
        <p className={s.item}>Total: {total} </p>
      </li>
      <li>
        <p className={s.item}>Positive feedback: {percantage}%</p>
      </li>
    </ul>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percantage: PropTypes.number,
};
