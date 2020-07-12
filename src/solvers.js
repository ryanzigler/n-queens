/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rows = solution.rows();
  rows[0][0] = 1;
  for (var i = 1; i < rows.length; i++) {
    rows[i][i] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return rows;
};

// hasAnyRooksConflicts: function() {
//   return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
// },

//{"0":[0],"n":1}
//{"0":[1],"n":1}
// [0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]
// [0, 0, 0, 0, 0]

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.createColumnIndex = function(columnIndex, board) {
  var column = [];
  for (var i = 0; i < board.length; i++) {
    column.push(board[i][columnIndex]);
  }
  return column;
};

window.countNRooksSolutions = function(n) {
  var solution = new Board({n: n});
  var count = 0;
  var rows = n;
  rows[0][0] = 0;
  for (var i = 0; i < rows.length; i++) {
    rows[i][i] = 1;
    count++;
  }
  //rookSolutions(rows);
  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
