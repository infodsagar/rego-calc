import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
} from '@fortawesome/fontawesome-svg-core/import.macro';

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
      <FontAwesomeIcon icon={temp > 0 ? regular('face-laugh') : ''} />
      <FontAwesomeIcon icon={temp < 0 ? regular('face-sad-tear') : ''} />
    </div>
  );
};
