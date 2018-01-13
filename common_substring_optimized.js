function findLongestSubstring(str1, str2) {
	if (!str1.length || !str2.length) {
		return 'No common string found!';
	}

	var arrToCompare      = [];
	var substring         = null;
	var substringLength   = null;
	var maxSubstringIndex = null;

	for (var i = 0; i < str1.length; i++) {
		var tempArr = [];
		for (var j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j]) {
				if (arrToCompare[j-1]) {
					var incrementedNum = arrToCompare[j-1] + 1;
					tempArr.push(incrementedNum);
					substringLength = incrementedNum;
					maxSubstringIndex = j;
				} else {
					tempArr.push(1);
				}
			} else {
				tempArr.push(0);
			}
		}
		arrToCompare = tempArr;
	}

	substring = str2.slice(maxSubstringIndex-substringLength+1, maxSubstringIndex+1);

	return substring ? substring : 'No common string found!';
}