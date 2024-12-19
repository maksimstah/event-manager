import { useState } from 'react';
import { useCreateEventMutation } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './AddEventPage.module.scss';

const AddEventPage: React.FC = () => {
  const [createEvent] = useCreateEventMutation();
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    image: '',
    category: '',
    tickets: 0,
    price: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createEvent(formData).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to create event:', error);
    }
  };

  return (
    <div className={styles.addEventPage}>
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit} className={styles.eventForm}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Tickets:
          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;
