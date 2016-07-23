// mask
VMasker(document.querySelector("input")).maskPattern("99/99/9999");

var dates = {
    convert:function(d) {
        return (
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
            typeof d === "object" ? new Date(d.year,d.month,d.date) :
            NaN
        );
    },
    daysBetween:function( date1, date2 ) {
      var one_day=86400000; //in ms
      var date1_ms = date1.getTime();
      var date2_ms = date2.getTime();
      var difference_ms = date2_ms - date1_ms;
      return Math.round(difference_ms/one_day);
    }
}

$("#calcular").click(function(){
  data_fmt = $("#field-data").val().split("/");
  // Check date format
  if($("#calcular").attr('date-format') == 'pt-br'){
    data_fmt.reverse();
  } else {
    data_fmt = [data_fmt[2],data_fmt[0],data_fmt[1]];
  }
  data_fmt[1] = data_fmt[1] - 1;

  data1 = dates.convert(data_fmt);
  data2 = dates.convert([1989,02,12])

  $("#result-data").html(dates.daysBetween(data2,data1));
  $(".box-result").show();
});

$(".box-result").hide();
