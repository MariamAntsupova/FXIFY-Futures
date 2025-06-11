import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'] 
})
export class ChartsComponent implements OnInit {
  currentTime: string = '';
  currentDate: string = '';

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.currentDate = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  }

  chartData: ChartData<'line'> = {
    labels: ['Jun 8', 'Jun 9', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14'],
    datasets: [
      {
        label: 'Balance',
        data: [92000, 95000, 98000, 99000, 100000, 103000, 104000],
        borderColor: '#e6d2f9',
        backgroundColor: 'rgb(24, 178, 106)',
        tension: 0.3,
        fill: false
      },
      {
        label: 'Profit Target',
        data: [100000, 100000, 100000, 100000, 100000, 100000, 100000],
        borderColor: '#b478ed',
        borderDash: [5, 5],
        fill: false
      },
      {
        label: 'Minimum Balance',
        data: [97000, 97000, 97000, 97000, 97000, 97000, 97000],
        borderColor: '#340c5a',
        borderDash: [5, 5],
        fill: false
      }
    ]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#ffffff'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: '#333333'
        }
      },
      y: {
        ticks: {
          color: '#ffffff'
        },
        grid: {
          color: '#333333'
        }
      }
    }
  };
}
