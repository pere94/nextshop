import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import styles from '../../Components/Chart/Chart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({chartData}) => {

    const options = {
        Title: {
            display: true,
            text: 'Category',
            fontSize: 20,
        },
        legend: {
            display: true,
            position: 'right',
        },
    };

    return (
        <div className={styles.BarChart}>
            <Bar 
                data={chartData}
                options={options}
            />
        </div>
    );
};