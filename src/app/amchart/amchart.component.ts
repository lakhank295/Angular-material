import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-amchart',
  templateUrl: './amchart.component.html',
  styleUrls: ['./amchart.component.scss']
})
export class AmchartComponent implements OnInit, AfterViewInit {
  private charts: am4charts.XYChart;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("line-chart", am4charts.XYChart)

      let title = chart.titles.create();
      title.text = 'Product Sales by Area'

      let data = [
        { "area": "India", "computers": 20, "mobile": 100, "cars": 20 },
        { "area": "America", "computers": 100, "mobile": 20, "cars": 5 },
        { "area": "Urope", "computers": 200, "mobile": 50, "cars": 10 },
        { "area": "Africa", "computers": 50, "mobile": 50, "cars": 50 },
        { "area": "Chicago", "computers": 70, "mobile": 20, "cars": 90 },
        { "area": "New York", "computers": 30, "mobile": 40, "cars": 50 },
        { "area": "China", "computers": 10, "mobile": 10, "cars": 10 }
      ]

      chart.data = data;

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.title.text = "Area";

      categoryAxis.dataFields.category = "area";

      let valueYAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueYAxis.title.text = "Sales";
      valueYAxis.renderer.minWidth = 20;


      let seriesNames = ["computers", "mobile", "cars"];

      for(let i = 0; i < seriesNames.length; i++) {
        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.categoryX = "area";
        series.dataFields.valueY = seriesNames[i];

        series.name = seriesNames[i];

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.tooltipText = "Area: {categoryX} \n Sales: {valueY}"
      }

      chart.legend = new am4charts.Legend();
      this.charts = chart;

    })
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if(this.charts) {
        this.charts.dispose();
      }
    })
  }
}
