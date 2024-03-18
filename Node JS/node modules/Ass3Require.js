
exports.isPrimeArray = function(numbers){
	var ans = numbers.filter(function(v){
		var flag = true;
		for(i = 2 ; i <= v/2 ; i++){
			if(v % i == 0){
				flag = false;
				break;
			}
		}
		return flag;
	})
	return ans;
}


exports.longestString = function(strings){
	var ans = strings.reduce(function(a,v){
		return (a.length > v.length ? a : v);
	},"");
	return ans;
}