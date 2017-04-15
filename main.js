var $main = $("#main")

var height = 50;
var width = 50;

var data = [];

var newCellData = function(i, j){
  return 0;
}

function init(){
  $main.empty();
  _(height).times(function(i){
    var $row = getDiv().addClass("row");
    var row = [];
    data[i] = row;
    _(width).times(function(j){
      var $cell = getDiv().addClass("cell");
      $row.append($cell);
      row[j] = newCellData(i, j);
    });
    $main.append($row);
  });
}
function getDiv(){
  return $("<div></div>");
}

init();

