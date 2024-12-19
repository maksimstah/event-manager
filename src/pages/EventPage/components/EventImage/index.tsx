import styles from './EventImage.module.scss';

interface IEventImage {
  image: string;
  name: string;
}

const EventImage = ({ image, name }: IEventImage) => {
  return (
    <div className={styles.image}>
      <img src={image} alt={name} />
    </div>
  );
};

export default EventImage;
