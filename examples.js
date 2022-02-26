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
		
	}
	
	return response

}


// Otwieranie okienka

function showDefinitionWindow(definitionId){
	hide("informations");
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


// Wyszukiwarka v2
const searchBox = document.getElementById("searchBox");
const allDefinitions = [...document.querySelectorAll(".words ul li")]
console.log(allDefinitions)
console.log(searchBox)
const allH2 = [...document.querySelectorAll(".words h2")]
console.log(allH2)
searchBox.addEventListener('keyup', (e) => {
	for(let i = 0; i < allH2.length; i++){
		console.log(allH2[i]);
		allH2[i].classList.add("unactive")
	}
	if (e.target.value === ""){
		for(let i = 0; i < allH2.length; i++){
			console.log(allH2[i]);
			allH2[i].classList.remove("unactive")
		}
	}
	const searchString = e.target.value;
	const filteredDefinitions = [];
	for (let i = 0; i < allDefinitions.length; i++){
		if (allDefinitions[i].innerText.toUpperCase().includes(searchString.toUpperCase())){
			filteredDefinitions.unshift(allDefinitions[i]);
		}
	}
	console.log(filteredDefinitions);
	for(let i = 0; i < allDefinitions.length; i++){
		if (filteredDefinitions.includes(allDefinitions[i])){
			allDefinitions[i].classList.remove("unactive")
		}
		else{
			allDefinitions[i].classList.add('unactive')
		}
	}
})
    


// Listener dla słów
const wordsList = [...document.querySelectorAll('.allLinks ul li')];
for(let i = 0; i < wordsList.length; i++){
    wordsList[i].addEventListener('click', showDefinition);
};