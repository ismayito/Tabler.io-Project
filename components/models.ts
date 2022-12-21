export interface ApexOptions {
    annotations?: ApexAnnotations;
    chart?: ApexChart;
    colors?: any[];
    dataLabels?: ApexDataLabels;
    series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
    stroke?: ApexStroke;
    labels?: string[];
    legend?: ApexLegend;
    fill?: ApexFill;
    tooltip?: ApexTooltip;
    plotOptions?: ApexPlotOptions;
    responsive?: ApexResponsive[];
    markers?: ApexMarkers;
    noData?: ApexNoData;
    xaxis?: ApexXAxis;
    yaxis?: ApexYAxis | ApexYAxis[];
    forecastDataPoints?: ApexForecastDataPoints;
    grid?: ApexGrid;
    states?: ApexStates;
    title?: ApexTitleSubtitle;
    subtitle?: ApexTitleSubtitle;
    theme?: ApexTheme;
  }