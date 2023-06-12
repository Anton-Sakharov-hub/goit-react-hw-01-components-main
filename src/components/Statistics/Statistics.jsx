import styles from './Statistics.module.css';

// function randomRGB() {
//   const [r, g, b] = Math.random()
//   console.log(r)

//   return `rgb(
//     ${r}
//     ${g}
//     ${b}
//   )`;
// }

function Statistics({ stats, title = 'Title' }) {
  return (
    <section className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.statsItem} key={id}>
            <span className={styles.label}>{label} </span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]
