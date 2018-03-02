function createCoordinates() {
  var touchscreen = [
    "qwertyuiop",
    "asdfghjkl",
    "zxcvbnm",
  ];
  var coordinateTable = {}

  for(var i = 0; i < touchscreen.length; i++) {
    for(var j = 0; j < touchscreen[i].length; j++) {
      coordinateTable[touchscreen[i][j]] = [i, j];
    }
  }
  return coordinateTable;
}

function getDistance(x, y, coordinateTable) {
  return Math.abs(coordinateTable[x][0] - coordinateTable[y][0]) +
    Math.abs(coordinateTable[x][1] - coordinateTable[y][1])
}

function sortFunction(a, b) {
    if (a[0] === b[0]) {
      for(var i = 0; i < a[1][0].length; i++) {
        if(a[1][0] < b[1][0]) {
          return -1;
        }
        if(a[1][0] > b[1][0]) {
          return 1;
        }
      }
      return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


function thing(lines) {
  var coordinateTable = createCoordinates();
  var realAns = [];
  var jump = 1;
  for(var i = 0; i < Number(lines[0]) - 1; i++) {
    var ans = [];
    var line = lines[jump + i].split(' ');
    var typedWord = line[0];
    var jump = line[1];
    for(var i = 0; i < Number(line[1]); i++) {
      ans.push([0, lines[2 + i]])
    }
    for(var i = 0; i < ans.length; i++) {
      var sum = 0;
      for(var j = 0; j < ans[i][1].length; j++) {
        sum += getDistance(ans[i][1][j], typedWord[j], coordinateTable)
      }
      ans[i][0] = sum;
    }
    realAns.push(ans.sort(sortFunction));
    console.log(ans);
    console.log(ans.sort(sortFunction));
  }
  return realAns;
}

var ins = [
  "2",
  "ifpv 3",
  "iopc",
  "icpc",
  "gcpc",
  "edc 5",
  "wsx",
  "edc",
  "rfv",
  "plm",
  "qed",
]

var outs = [
  "icpc 3",
  "gcpc 7",
  "iopc 7",
  "edc 0",
  "rfv 3",
  "wsx 3",
  "qed 4",
  "plm 17",
]

if(thing(ins) !== outs) {
  console.log(thing(ins))
  throw new Error('9 0 3 doesnt work!')
}
