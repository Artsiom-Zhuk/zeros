module.exports = function getZerosCount(number) {
  // your implementation
	if (number >= 1 && number <= Math.pow(10,8)) {
  		var result;
  		var index = 5;
  		var sumResult = 0;
  		do {
  			result = (number / index) - ((number / index) % 1);
  			index = index * 5;
  			sumResult += result;
  		} while(result > 1)
	}

	return sumResult;		
}

