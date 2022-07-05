import { React, useState } from 'react';
import './index.css';
import { Price } from './price';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div class='container my-4 '>
      <div class='row row justify-content-center'>
        <div class='col-sm-8 col-md-6 col-lg-5 col-xl-4 bg-light shadow p-3 mb-5 bg-body rounded'>
          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='days' className='label'>
              Days left
            </label>
            {formErrors.days && <p className='error-days'>{formErrors.days}</p>}
            <input
              type='text'
              name='days'
              className='form-control my-2'
              onChange={handleChange}
              value={formValue.days}
            />
            <label htmlFor='rego' className='label'>
              Annual Rego Fees
            </label>

            <select
              name='drop'
              className='form-select my-2'
              onChange={handleChange}
            >
              <option value='294' name='fees'>
                $294
              </option>
              <option value='331' name='fees'>
                $331
              </option>
              <option value='388' name='fees'>
                $388
              </option>
              <option value='556' name='fees'>
                $556
              </option>
              <option value='435' name='fees'>
                $433
              </option>
              <option value='485' name='fees'>
                $485
              </option>
              <option value='572' name='fees'>
                $572
              </option>
              <option value='826' name='fees'>
                $826
              </option>
            </select>
            <button
              className='btn btn-info my-4'
              onClick={() => setIsSubmit(!isSubmit)}
            >
              Calculate
            </button>
            <Price day={formValue.days} fee={formValue.fees} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
