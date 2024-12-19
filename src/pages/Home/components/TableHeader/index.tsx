import styles from './TableHeader.module.scss';

interface ITableHeader {
  handleSort(arg: string): void;
}

const TableHeader = ({ handleSort }: ITableHeader) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        <th
          className={styles.filter}
          onClick={() => handleSort('name')}
          title="Sort by name"
        >
          Event name
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('date')}
          title="Sort by date"
        >
          Date&Time
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('category')}
          title="Sort by category"
        >
          Category
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('tickets')}
          title="Sort by ticket count"
        >
          Tickets count
        </th>
        <th
          className={styles.filter}
          onClick={() => handleSort('price')}
          title="Sort by price"
        >
          Price
        </th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
