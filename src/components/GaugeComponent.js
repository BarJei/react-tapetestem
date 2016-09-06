import React from 'react';
import Highcharts from 'highcharts';
import { Header, Colors, Segment, Grid, Divider} from 'stardust';
import faker from 'faker';

var ReactHighcharts = require('react-highcharts');

var HighchartsMore = require('highcharts-more');
HighchartsMore(ReactHighcharts.Highcharts);

var HighchartsSolidGauge = require('highcharts-solid-gauge');
HighchartsSolidGauge(ReactHighcharts.Highcharts);

import TableComponent from './TableComponent';


var arrTotalRevenuePerHour = faker.random.number();
var arrTotalRevenuePerMinute = faker.random.number();

// solid gauge / speedometer
var totalPerHour = {
    chart: {
        type: 'solidgauge'
    },
    title: 'Sales',
    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle:   90,
        background: {
            backgroundColor: '#fafafa',
            innerRadius: '65%',
            outerRadius: '95%',
            shape: 'arc'
        }
    },
    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#f16b55'], // green
            [0.5, '#f16b55'], // yellow
            [0.9, '#f16b55'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        title: {
            text: 'Sales',
            y:    -70
        },
        labels: {
            y: 16
        },
        min: arrTotalRevenuePerHour / 1.5,
        max: arrTotalRevenuePerHour * 1.5
    },
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
      name: 'Speed',
            data: [arrTotalRevenuePerHour],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px; color: #f16b55"> ${y}</span><br/>' +
                       '<span style="font-size:12px; color: #cbcbcb"> total per hour </span></div>'
            },
            tooltip: {
                valueSuffix: ' total per hour'
            },
            enableMouseTracking: false
    }]
};

var totalPerMinute = {
    chart: {
        type: 'solidgauge'
    },
    title: 'Sales',
    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle:   90,
        background: {
            backgroundColor: '#fafafa',
            innerRadius: '65%',
            outerRadius: '95%',
            shape: 'arc'
        }
    },
    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#25b3bf'], // green
            [0.5, '#25b3bf'], // yellow
            [0.9, '#25b3bf'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 400,
        tickWidth: 0,
        title: {
            text: 'Sales',
            y:    -70
        },
        labels: {
            y: 16
        },
        min: arrTotalRevenuePerMinute / 0.5,
        max: arrTotalRevenuePerMinute * 0.5
    },
    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
      name: 'Speed',
            data: [arrTotalRevenuePerMinute],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px; color: #25b3bf"> ${y}</span><br/>' +
                       '<span style="font-size:12px; color: #cbcbcb"> total per minute </span></div>'
            },
            tooltip: {
                valueSuffix: ' total per minute'
            },
            enableMouseTracking: false
    }]
};

// angular gauge
var gaugeOptionsAngular = {
  chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: {
            text: 'Speedometer'
        },

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },

        // the value axis
        yAxis: {
            min: 0,
            max: 200,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },

        series: [{
          enableMouseTracking: false,
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
          }]
}

export default class GaugeComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div>
        <Segment>
    	<Header size='huge' color='grey'> $695,165.79 </Header>
        total for today

        <Grid columns={2} relaxed>

        <Grid.Column>
          <Segment className='basic'>
        <ReactHighcharts config={totalPerHour} ref='chart' />
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment className='basic'>
          <ReactHighcharts config={totalPerMinute} ref='chart' />
          </Segment>
        </Grid.Column>

        </Grid>
        </Segment>

        <Segment>
        <TableComponent />
        </Segment>

        </div>
    	);
  }
}
