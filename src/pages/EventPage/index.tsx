import EventImage from './components/EventImage';
import { useGetEventQuery, useUpdateEventMutation } from '../../services/api';
import { useParams } from 'react-router-dom';
import EventInfo from './components/EventInfo';
import Container from '../../shared/Container';
import styles from './EventPage.module.scss';
import { useState } from 'react';
import EditEventForm from './components/EditEventForm';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { eventType } from '../../services/types';

const EventPage = () => {
  const { eventID } = useParams<{ eventID: string }>();
  const { data, isError } = useGetEventQuery(eventID!);
  const [updateEvent] = useUpdateEventMutation();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<eventType>({
    id: eventID || '',
    name: '',
    date: '',
    category: '',
    tickets: 0,
    price: '',
    image: '',
    description: '',
  });

  const onEditFormOpen = () => {
    if (data && eventID) {
      setIsEditing(true);
      setFormData({
        id: eventID,
        name: data.name,
        date: data.date,
        category: data.category,
        tickets: data.tickets,
        price: data.price,
        image: data.image,
        description: data.description,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!eventID) {
      toast.error('Event ID is missing.');
      return;
    }

    try {
      await updateEvent(formData).unwrap();
      setIsEditing(false);
      toast.success('Event edited successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error! ${error.message}`);
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };

  if (isError) return toast.error('Oops! Seems this event not exist');

  return (
    <Container>
      {data && (
        <div className={styles.eventPage}>
          <EventImage name={data.name} image={data.image} />
          {isEditing ? (
            <EditEventForm
              name={formData.name || ''}
              date={formData.date || ''}
              category={formData.category || ''}
              tickets={formData.tickets || 0}
              price={formData.price || ''}
              image={formData.image || ''}
              description={formData.description || ''}
              handleChange={handleChange}
              handleSave={handleSave}
            />
          ) : (
            <EventInfo
              name={data.name}
              description={data.description}
              date={data.date}
              category={data.category}
              tickets={data.tickets}
              price={data.price}
              setIsEditing={onEditFormOpen}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default EventPage;
