import {useState} from 'react';
import * as kidApi from '../../utilities/kids-api';

export default function AccountPage() {

  const[formData, setFormData] = useState({name: '', level: 0});

  function handleSubmit(evt) {
    evt.preventDefault();
    kidApi.create(formData);
  }

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  return (
    <>
      <h1>Account</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label>Name</label>
          <input onChange={handleChange} name="name" value={formData.name} placeholder="(required)" minLength="1" required />
        </div>
        <div>
          <label>Level</label>
          <select name="level" onChange={handleChange}>
            <option value={0}>Level Zero</option>
            <option value={1}>Level One</option>
            <option value={2}>Level Two</option>
          </select>
        </div>
        <button type="submit">ADD</button>
      </form>
    </>
  );
}