var chocolateBars = ["snickers","hundred grand",
"kitkat","skittles"];

console.log(chocolateBars);


const array=[1];
function addElementToBeginningOfArray(array,element){
	return [element,...array];

}


function destructivelyAddElementToBeginningOfArray(array,element){

  array.unshift("foo");
  return array;
	}
	
function addElementToEndOfArray(array,element){
		return [...array,element];

}

function destructivelyAddElementToEndOfArray(array,element){

	array.push(element);
	return array;
	}

function accessElementInArray(array,index){
	return array[index];
	}
function destructivelyRemoveElementFromBeginningOfArray(array){
		array.shift();
		return array;
		}
		
function removeElementFromBeginningOfArray(array){
	array.slice(0);
	return array;

}
function destructivelyRemoveElementFromEndofArray(array){

	array.pop();
	return array;
	}



