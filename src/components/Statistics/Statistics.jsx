import css from 'components/Statistics/Statistics.module.css';
import data from './data.json';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.list}>
        <li key={data.id} className={css.item}>
          <span className="label">.docx</span>
          <span className="percentage">4%</span>
        </li>
        <li key={data.id} className={css.item}>
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li key={data.id} className={css.item}>
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li key={data.id} className={css.item}>
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li>
      </ul>
    </section>
  );
};
