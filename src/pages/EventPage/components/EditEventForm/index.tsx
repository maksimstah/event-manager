import styles from './EditEventForm.module.scss';

interface IEditEventForm {
  name: string;
  date: string;
  category: string;
  tickets: number;
  price: string;
  description: string;
  image: string;
  handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  handleSave(): void;
}

const EditEventForm = ({
  name,
  // date,
  category,
  tickets,
  price,
  description,
  image,
  handleChange,
  handleSave,
}: IEditEventForm) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSave();
      }}
      className={styles.editForm}
    >
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      {/* <input
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
        required
      /> */}
      <input
        type="text"
        name="category"
        value={category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="tickets"
        value={tickets}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={handleChange}
        required
      />
      <input type="text" name="image" value={image} onChange={handleChange} />
      <textarea
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditEventForm;
