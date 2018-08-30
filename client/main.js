$(document).ready(function() {
// write your code here

    $.getJSON("/data.json", function(data) {
        var tbody;
        for (var i = 0; i < data.length; i++) {
            var theLink = data[i].name;
            tbody = $('<tbody>');
            tbody.append("<tr><td class='names'>" + data[i].name + "</td><td class='descr'>" 
            + data[i].description + "</td><td class='links'><a href='https://www.google.com/maps?q=" + data[i].location + "'" + " target='_blank'>Map it!</a></td></tr>");
              $('table').append(tbody);
        }
    });
});      