import React from 'react';
import styles from './TableRow.module.scss';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDeleteEventMutation } from '../../../../services/api';
import { toast } from 'react-toastify';

interface TableRowProps {
  eventName: string;
  date: string;
  category: string;
  ticketCount: number;
  price: string;
  id: string;
}

const TableRow: React.FC<TableRowProps> = ({
  eventName,
  date,
  category,
  ticketCount,
  price,
  id,
}) => {
  const [deleteEvent] = useDeleteEventMutation();
  const formattedDate = new Date(date).toLocaleString('default', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
  const handleDeleteEvent = async () => {
    try {
      await deleteEvent(id).unwrap();
      toast.success('Event deleted successfully!');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error! ${error.message}`);
      } else {
        toast.error('An unknown error occurred.');
      }
    }
  };
  return (
    <tr className={styles.tableRow}>
      <td>
        <Link to={`events/${id}`}>{eventName}</Link>
      </td>
      <td>{formattedDate}</td>
      <td>{category}</td>
      <td>{ticketCount}</td>
      <td>{price}</td>
      <td>
        <button
          className={styles.deleteBtn}
          onClick={() => handleDeleteEvent()}
          title="Delete event"
        >
          <MdDeleteForever style={{ width: '20px', height: '20px' }} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
