  const uniquePathsWithObstacles = (obstacleGrid) => 
    obstacleGrid.reduce((acc, row, i) => 
      [...acc, row.reduce((rowAcc, initialValue, j) => {
        if(i === 0 && j === 0)
          return initialValue === 0 ? [1] : [0];
        else if(obstacleGrid[i][j] === 1)
          return [...rowAcc, 0];
        else {
          let counter = 0;
          if (i > 0)
            counter += acc[i - 1][j];
          if (j > 0)
            counter += rowAcc[j - 1];
          return [...rowAcc, counter];
        }
      }, [])
    ], [])[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
