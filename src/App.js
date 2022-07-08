import { React, useState } from 'react';
import './index.css';
import { Price } from './price';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const today = new Date();
  const initialValue = {
    days: '',
    fees: '292',
    startDay: today.getDate(),
    startMonth: today.getMonth() + 1,
    startYear: today.getFullYear(),
  };
  const [formValue, setFormValue] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let fromDate = new Date(
    parseInt(formValue.startYear),
    parseInt(formValue.startMonth - 1),
    parseInt(formValue.startDay)
  );

  let endDate = new Date(
    parseInt(formValue.endYear),
    parseInt(formValue.endMonth - 1),
    parseInt(formValue.endDay)
  );

  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.round(Math.abs((fromDate - endDate) / oneDay));

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      (name === 'startDay' && value <= 31) ||
      (name === 'endDay' && value <= 31) ||
      (name === 'days' && value <= 365) ||
      (name === 'startMonth' && value <= 12) ||
      (name === 'endMonth' && value <= 12) ||
      (name === 'startYear' && value.length <= 4) ||
      (name === 'endYear' && value.length <= 4)
    ) {
      setFormValue({ ...formValue, [name]: value });
    }
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
    <div class='container my-4'>
      <div class='row row justify-content-center '>
        <div class='col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4 bg-light shadow p-3 mb-5 bg-body rounded d-flex flex-column'>
          <form className='form d-flex flex-column' onSubmit={handleSubmit}>
            <label htmlFor='start' className='mb-2'>
              Enter start date
            </label>

            <div className='d-flex'>
              <input
                type='text'
                name='startDay'
                placeholder='dd'
                className='input-width me-1'
                onChange={handleChange}
                value={formValue.startDay}
              />
              <span>/</span>
              <input
                type='text'
                name='startMonth'
                placeholder='mm'
                className='input-width mx-2'
                onChange={handleChange}
                value={formValue.startMonth}
              />
              <span>/</span>
              <input
                type='text'
                name='startYear'
                placeholder='yyyy'
                className='input-width-year ms-2'
                onChange={handleChange}
                value={formValue.startYear}
              />
            </div>

            <label htmlFor='end' className='my-2'>
              Enter end date
            </label>

            <div className='d-flex'>
              <input
                type='text'
                name='endDay'
                placeholder='dd'
                className='input-width me-1'
                onChange={handleChange}
                value={formValue.endDay}
              />
              <span>/</span>
              <input
                type='text'
                name='endMonth'
                placeholder='mm'
                className='input-width mx-2'
                onChange={handleChange}
                value={formValue.endMonth}
              />
              <span>/</span>
              <input
                type='text'
                name='endYear'
                placeholder='yyyy'
                className='input-width-year ms-2'
                onChange={handleChange}
                value={formValue.endYear}
              />
            </div>

            <label htmlFor='days' className='mt-2'>
              Days left:{' '}
              <span className='fw-bold'>
                {totalDays < 365 ? totalDays : ''}
              </span>
            </label>
            {formErrors.days && <p className='error-days'>{formErrors.days}</p>}
            <input
              type='text'
              name='days'
              className='form-control my-2'
              onChange={handleChange}
              value={formValue.days}
            />

            <label htmlFor='rego' className='mt-2'>
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
