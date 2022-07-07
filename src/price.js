import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFaceSmile,
  faFaceSadTear,
} from '@fortawesome/free-regular-svg-icons';

export const Price = (props) => {
  const { day, fee } = props;
  let temp = '';
  if (/[0-9]/.test(day) && /[0-9]/.test(fee)) {
    temp = (((fee - 68) / 365) * day - 30).toFixed(2);
  } else {
    temp = '';
  }

  return (
    <div className='fs-3'>
      Refund: $ {temp ? temp : 0}{' '}
      <FontAwesomeIcon icon={temp > 0 ? faFaceSmile : ''} />
      <FontAwesomeIcon icon={temp < 0 ? faFaceSadTear : ''} />
    </div>
  );
};
