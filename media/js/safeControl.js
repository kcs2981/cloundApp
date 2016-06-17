$(function(){
    Highcharts.setOptions({
        colors: ['#6497e7', '#434348', '#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE','#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
    });
    $('#container').highcharts({

        chart: {
            polar: true,
            type: 'area'
        },

        title: {
            text: ''
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['物理安全92%', '主机安全65%', '应用安全96%', '数据安全及备份恢复90%','网络安全78%'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: ''
        },
        exporting: {//出去打印操作
            enabled: false
        },
        credits: {//去除版权信息
            enabled: false
        },
        legend: {
            //align: 'right',
            //verticalAlign: 'top',
            //y: 70,
            //layout: 'vertical'
            enabled: false
        },

        series: [{
            name: 'test1',
            data: [92, 65, 96, 90, 78],
            pointPlacement: 'on'
        }]

    });
});