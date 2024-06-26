import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '@mui/material/Button';

function InsuranceQuoteForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    vehicleMake: '',
    vehicleModel: '',
    coverage: 'basic', // Default coverage option
    multiPolicyDiscount: false,
    goodDriverDiscount: false,
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData); // For testing, log the form data
    closeModal(); // Close modal after form submission
  };

  return (
    <div>
      <Button variant="contained" onClick={openModal}>Open Form</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Insurance Quote Form"
      >
        <h2>Get Insurance Quote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Vehicle Make:
              <input
                type="text"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Vehicle Model:
              <input
                type="text"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Coverage Options:
              <select
                name="coverage"
                value={formData.coverage}
                onChange={handleChange}
              >
                <option value="basic">Basic</option>
                <option value="standard">Standard</option>
                <option value="premium">Premium</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="multiPolicyDiscount"
                checked={formData.multiPolicyDiscount}
                onChange={handleChange}
              />
              Multi-Policy Discount
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="goodDriverDiscount"
                checked={formData.goodDriverDiscount}
                onChange={handleChange}
              />
              Good Driver Discount
            </label>
          </div>
          {/* Add more form fields as needed */}
          <button type="submit">Get Quote</button>
        </form>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default InsuranceQuoteForm;
