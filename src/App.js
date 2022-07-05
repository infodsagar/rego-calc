import { React, useState, useEffect } from 'react';
import './index.css';
import { Price } from './price';

function App() {
  const initialValue = { days: '', fees: '292' };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.days) {
      errors.statusDays = 'true';
      errors.days = 'Days required!';
    } else if (!/[0-9]/.test(values.days)) {
      errors.days = 'Number only!';
      errors.statusDays = 'true';
    } else if (values.days.length > 3) {
      errors.days = 'Days must be less than 4 digits';
      errors.statusDays = 'true';
    } else {
      errors.days = '';
      errors.statusDays = 'false';
    }
    return errors;
  };

  return (
    <div className='box'>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='days' className='label'>
          Days left
        </label>
        {formErrors.days && <p className='error-days'>{formErrors.days}</p>}
        <input
          type='text'
          name='days'
          className='input'
          onChange={handleChange}
          value={formValue.days}
        />
        <label htmlFor='rego' className='label'>
          Annual Rego Fees
        </label>

        <select name='drop' className='input' onChange={handleChange}>
          <option value='292' name='fees'>
            $292
          </option>
          <option value='329' name='fees'>
            $329
          </option>
          <option value='329' name='fees'>
            $329
          </option>
          <option value='554' name='fees'>
            $554
          </option>
          <option value='433' name='fees'>
            $433
          </option>
          <option value='483' name='fees'>
            $483
          </option>
          <option value='570' name='fees'>
            $570
          </option>
          <option value='824' name='fees'>
            $824
          </option>
        </select>
        <button className='btn' onClick={() => setIsSubmit(!isSubmit)}>
          Calculate
        </button>
        <Price day={formValue.days} fee={formValue.fees} />
      </form>
    </div>
  );
}

export default App;
