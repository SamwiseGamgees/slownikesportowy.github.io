// Pomocnicze funkcje

function $(elementId){
	return document.getElementById(elementId);
}

function hide(elementId){
    //$(elementId).style.display = 'none';
	$(elementId).style.visibility = 'hidden';
}

function show(elementId){
    //$(elementId).style.display = 'block';
	$(elementId).style.visibility = 'visible';
}
	

function removeOptions(selectElement) {
   var i, L = selectElement.options.length - 1;
   for(i = L; i >= 0; i--) {
	  console.log(i);
      selectElement.remove(i);
   }
}
	




function getDefinitionByTitle(title){
	
	for (var i = 0; i < definitionList.length; i++) {
		if (definitionList[i].title == title) return definitionList[i];
	}
	
	return undefined;

}

function searchDefinitionByWord(word){
	response = []
	for (var i = 0; i < definitionList.length; i++) {
		
		if (definitionList[i].title.toUpperCase().includes(word)) 
			response.push(definitionList[i]);
		if ($("searchSelect" === ''))
			response.hide(definitionList)
		
	}
	
	return response

}


// Otwieranie okienka

function showDefinitionWindow(definitionId){
	hide("searchSelect")
	hide("informations");
	$("searchSelect").size = 0;
	let definition = getDefinitionByTitle(definitionId);
	console.log(definition);
    if(!definition){
		console.log("Definition " + definitionId +" not found");
		return;
    }
	
	$("definitionTitle").innerHTML = definition.title
	$("definitionContent").innerHTML = definition.content
	
	show("definitionWindow");

}


const showDefinition = e =>{
    showDefinitionWindow(e.target.title)

};

// Wyszukiwarki:

const searchDefinition = e =>{
    console.log(e);
    const searchedWord = e.value.toUpperCase();
	if (e.value === ''){
		removeOptions($("searchSelect"));
		$("searchSelect").size = 0;
		hide('searchSelect');
		return;
	}
    result = searchDefinitionByWord(searchedWord);
	
	removeOptions($("searchSelect"));
	
	//Create and append the options
	for (var i = 0; i < result.length; i++) {
		$("searchSelect").size = 0;
		var option = document.createElement("option");
		console.log(option);
		option.value = result[i].title;
		option.text = result[i].title;
		option.title = result[i].title;
		$("searchSelect").appendChild(option);
		

	if (result.length < 7){
		$("searchSelect").size = result.length;
	}
	else if (result.length > 7){
		$("searchSelect").size = 7;
	}
	show('searchSelect');
	}
	

    
}


// Listener dla słów
const wordsList = [...document.querySelectorAll('.allLinks ul li')];
for(let i = 0; i < wordsList.length; i++){
    wordsList[i].addEventListener('click', showDefinition);
};
