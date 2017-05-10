var arrayTasks = {

	concat: function (arr1, arr2) {
      var newArray = [];
      for (var item of arr1){
      	newArray.push(item);
      }
      for(var item of arr2){
      	newArray.push(item);
      }
      return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		  arr.splice(index, 0, itemToAdd);
		  return arr;
	},

	square: function (arr) {
		  newArray = arr.map(function(number){
		  	return number * number;
		  });
     return newArray;
	},

	sum: function (arr) {
		  var total = 0;
		  arr.forEach(function(item){
		  	total += item;
		  });
		  return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		arr.forEach(function(item, index){
			if(arr.indexOf(item, index + 1) > -1) {
				if(newArray.indexOf(item) === -1){
					newArray.push(item);
				}
			}
		});
			return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		  var newArray = [];
		  arr.forEach(function(item){
		  	if (item != valueToRemove){
		  		newArray.push(item);
		  	}
		  })
		  return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		  var newArray = [];
		  for(i = 0; i < arr.length; i++){
		  	if(arr[i] === itemToFind){
		  		newArray.push(i);
		  	}
		  }
		  return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		   var newArray = [];
		   arr.forEach(function(item){
		   	if(item % 2 === 0){
		   		newArray.push(item*item);
		   	}
		   });
		   var total = 0;
		   for (var item of newArray){
		   	total = total + item;
		   }
		   return total;
	}

}

module.exports = arrayTasks
