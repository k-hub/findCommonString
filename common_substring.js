function createMatrix(str1, str2) {
	var matrix = [];

	for (var i=0; i < str1.length; i++) {
		var row = [];
		for (var j=0; j < str2.length; j++) {
			row.push(0);
			}
		matrix.push(row);
	}

	return matrix;
}

function findCommonSubstring(str1, str2) {
	var matrix            = createMatrix(str1, str2);
	var substringLength   = null;
	var maxSubstringIndex = null;
	var substring 		  = null;

	for (var i=0; i < str1.length; i++) {
		for (var j=0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				if (i>0 && j>0) {
					matrix[i][j] = matrix[i-1][j-1] + 1;
				} else {
					matrix[i][j] = 1;
				}

				if (substringLength < matrix[i][j]) {
					substringLength = matrix[i][j];
					maxSubstringIndex = j;
				} 
			}
		}
	}

	substring = str2.slice(maxSubstringIndex-substringLength+1, maxSubstringIndex+1);

	return substring ? substring : 'No common string found!';
}