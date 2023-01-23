import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dash-vinho',
  templateUrl: './dash-vinho.component.html',
  styleUrls: ['./dash-vinho.component.css']
})
export class DashVinhoComponent implements OnInit {

  lineChart: Chart;
  barChart: Chart;

  constructor() { }

  ngOnInit() {

    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['J.P. Chenet', 'Yellow Tail', 'Carlo Rossi', 'Casillero del Diablo', 'Fronteira', 'Gato negro'],
        datasets: [{
          label: 'Total Vendido',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Marcas de Vinhos Mais Vendidos no Ano",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Merlot', 'Malbec', 'Chardonnay', 'Cabernet Sauvignon', 'Pinot Noir', 'Sémillon'],
        datasets: [{
          label: 'Total no ano',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Tipos de Uvas com Mais Saida",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}