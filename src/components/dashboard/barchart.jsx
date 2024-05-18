import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
// import am5index from "@amcharts/amcharts5/index";
// import am5xy from "@amcharts/amcharts5/xy";
// import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function BarChart() {
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    const myTheme = am5.Theme.new(root);

    myTheme.rule("AxisLabel", ["minor"]).setAll({
      dy: 1
    });

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // root.setThemes([
    //   am5themes_Animated.new(root),
    //   myTheme,
    //   am5themes_Responsive.new(root)
    // ]);


    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0
    }));


    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "zoomX"
    }));
    cursor.lineY.set("visible", false);

    // let date = new Date();
    // date.setMonth(12)
    // let value = 100;

    // function generateData() {
    //   value = Math.round((Math.random() * 10 - 5) + value);
    //   am5.time.add(date, "day", 1);
    //   return {
    //     date: date.getTime(),
    //     value: value
    //   };
    // }


    // function generateDatas(count) {
    //   let data = [];
    //   for (var i = 0; i < count; ++i) {
    //     data.push(generateData());
    //   }
    //   return data;
    // }


    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0,
      baseInterval: {
        timeUnit: "month",
        count: 1
      },
      markUnitChange: false,
      renderer: am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true,
        minorLabelsEnabled: true
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    xAxis.set("minorDateFormats", {
      "day": "dd",
      "month": "MM"
    });


    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));


    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

    series.columns.template.setAll({ strokeOpacity: 0 })


    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    // let data = generateDatas(30);
    let data = [
      {
        "date": 1716051600000,
        "value": 98
      },
      {
        "date": 1716138000000,
        "value": 95
      },
      {
        "date": 1716224400000,
        "value": 95
      },
      {
        "date": 1716310800000,
        "value": 99
      },
      {
        "date": 1716397200000,
        "value": 94
      },
      {
        "date": 1716483600000,
        "value": 98
      },
      {
        "date": 1716570000000,
        "value": 94
      },
      {
        "date": 1716656400000,
        "value": 94
      },
      {
        "date": 1716742800000,
        "value": 97
      },
      {
        "date": 1716829200000,
        "value": 101
      },
      {
        "date": 1716915600000,
        "value": 102
      },
      {
        "date": 1717002000000,
        "value": 100
      },
      {
        "date": 1717088400000,
        "value": 103
      },
      {
        "date": 1717174800000,
        "value": 102
      },
      {
        "date": 1717261200000,
        "value": 102
      },
      {
        "date": 1717347600000,
        "value": 101
      },
      {
        "date": 1717434000000,
        "value": 101
      },
      {
        "date": 1717520400000,
        "value": 104
      },
      {
        "date": 1717606800000,
        "value": 108
      },
      {
        "date": 1717693200000,
        "value": 106
      },
      {
        "date": 1717779600000,
        "value": 111
      },
      {
        "date": 1717866000000,
        "value": 111
      },
      {
        "date": 1717952400000,
        "value": 115
      },
      {
        "date": 1718038800000,
        "value": 115
      },
      {
        "date": 1718125200000,
        "value": 119
      },
      {
        "date": 1718211600000,
        "value": 115
      },
      {
        "date": 1718298000000,
        "value": 113
      },
      {
        "date": 1718384400000,
        "value": 114
      },
      {
        "date": 1718470800000,
        "value": 117
      },
      {
        "date": 1718557200000,
        "value": 118
      }
    ]
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ height: "350px" }}></div>
  );
}
export default BarChart;