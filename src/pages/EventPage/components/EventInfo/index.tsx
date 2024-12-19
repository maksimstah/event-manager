import { FaEdit } from 'react-icons/fa';
import styles from './EventInfo.module.scss';

interface IEventInfo {
  name: string;
  date: string;
  category: string;
  tickets: number;
  price: string;
  description: string;
  setIsEditing(): void;
}

const EventInfo = ({
  name,
  date,
  category,
  tickets,
  price,
  description,
  setIsEditing,
}: IEventInfo) => {
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div className={styles.details}>
      <h1>{name}</h1>
      <p>
        <strong>Date:</strong> {formattedDate}
      </p>
      <p>
        <strong>Time:</strong> {formattedTime}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Tickets Available:</strong> {tickets}
      </p>
      <p>
        <strong>Price:</strong> {price} EUR
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <button onClick={() => setIsEditing()}>
        <FaEdit />
        Edit the event
      </button>
    </div>
  );
};

export default EventInfo;
