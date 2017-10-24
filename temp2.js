const uniquePaths = (m, n) => {
	const grid = [];
	for(let i = 0; i < m; i++) {
			let temp = [];
			for(let j = 0; j < n; j++) 
				temp.push(0);
			grid.push(temp);
	}
	return grid.reduce((acc, row, i) => 
		[...acc, row.reduce((rowAcc, initialValue, j) => {
			if(i === 0 || j === 0)
				return [...rowAcc, 1];
			return [...rowAcc, acc[i - 1][j] + rowAcc[j - 1]];
		}, [])
	], [])[m - 1][n - 1]
}
