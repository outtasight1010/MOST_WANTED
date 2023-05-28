
function app(people) {
    displayWelcome();
    runSearchAndMenu(people);
    return exitOrRestart(people);
}

function displayWelcome() {
    alert('Hello and welcome to the Most Wanted search application!');
}

function runSearchAndMenu(people) {
    const searchResults = searchPeopleDataSet(people);

    if (searchResults.length > 1) {
        displayPeople('Search Results', searchResults);
    }
    else if (searchResults.length === 1) {
        const person = searchResults[0];
        mainMenu(person, people);
    }
    else {
        alert('No one was found in the search.');
    }
}

function searchPeopleDataSet(people) {

    const searchTypeChoice = validatedPrompt(
        'Please enter in what type of search you would like to perform.',
        ['id', 'name', 'traits']
    );

    let results = [];
    switch (searchTypeChoice) {
        case 'id':
            results = searchById(people);
            break;
        case 'name':
            results = searchByName(people);
            break;
        case 'traits':
            //! TODO
            results = searchByTraits(people);
            break;
        default:
            return searchPeopleDataSet(people);
    }

    return results;
}

function searchById(people) {
    const idToSearchForString = prompt('Please enter the id of the person you are searching for.');
    const idToSearchForInt = parseInt(idToSearchForString);
    const idFilterResults = people.filter(person => person.id === idToSearchForInt);
    return idFilterResults;
}

function searchByName(people) {
    const firstNameToSearchFor = prompt('Please enter the the first name of the person you are searching for.');
    const lastNameToSearchFor = prompt('Please enter the the last name of the person you are searching for.');
    const fullNameSearchResults = people.filter(person => (person.firstName.toLowerCase() === firstNameToSearchFor.toLowerCase() && person.lastName.toLowerCase() === lastNameToSearchFor.toLowerCase()));
    return fullNameSearchResults;
}

function searchByTraits(people){ 
    const searchByTraitChoice = prompt('Please enter what type of trait you are searching for.',
    [gender, dob, height, weight, eyecolor, occupation]);
    const traitSearchResults = people.filter(person => (person.gender === searchByTraitChoice && person.dob === searchByTraitChoice && person.height === searchByTraitChoice && person.weight === searchByTraitChoice 
        && person.eyecolor === searchByTraitChoice && person.occupation === searchByTraitChoice));
    return traitSearchResults;

}
// searching for height trait
function heightPersonSearch(people){
    let heightSearch = prompt('Would you like to search by height? Please enter yes or no.');
    switch(heightSearch){
        case "yes":
            let findingHeight= lookingUpHeight(people);
            return findingHeight;
        case "no":
            return people;
        default:
            heightPersonSearch(people);
            break;


    }
}
//searching for weight trait
function weightPersonSearch(people){
    let weightSearch = prompt('Would you like to search by weight? Please enter yes or no.');
    switch(weightSearch){
        case "yes":
            let findingWeight= lookingUpWeight(people);
            return findingWeight;
        case "no":
            return people;
        default:
            WeightPersonSearch(people);
            break;


    }
}
//searching for occupation trait
function occupationPersonSearch(people){
    let occupationSearch = prompt('Would you like to search by occupation? Please enter yes or no.');
    switch(occupationSearch){
        case "yes":
            let findingOccupation= lookingUpOccupation(people);
            return findingOccupation;
        case "no":
            return people;
        default:
            OccupationPersonSearch(people);
            break;


    }
}
// searching for eyeColor trait
function eyeColorPersonSearch(people){
    let eyeColorSearch = prompt('Would you like to search by eye color? Please enter yes or no.');
    switch(eyeColorSearch){
        case "yes":
            let findingEyeColor= lookingUpEyeColor(people);
            return findingEyeColor;
        case "no":
            return people;
        default:
            eyeColorPersonSearch(people);
            break;
    }
}
// searching for age trait
function agePersonSearch(people){
    let ageSearch = prompt('Would you like to search by age? Please enter yes or no.');
    switch(ageSearch){
        case "yes":
            covertDobToAge(people);
            let findingAge = lookingUpAge(people);
            return findingAge;
        case "no":
            return people;
        default:
            agePersonSearch(people);
            break;

    }
}
// converting dob to age for easy search
function covertDobToAge(people) {
    let personAge = people.map(function(el){
        let birthDate = new Date(el.dob);
        let todayDate = new Date();
        let resultDate = todayDate - birthDate;
        return el.age = age;

    })
}

function lookingUpHeight(people) {
    let heightInput = prompt('What is the height of the person? Please enter.');
    let newFilterHeight = people.filter(function(el) {
        if (el.height === people.height) {
            return true;
        }
    });
    return newFilterHeight();
}

function lookingUpWeight(people) {
    let weightInput = prompt('What is the weight of the person? Please enter.');
    let newFilterWeight = people.filter(function(el) {
        if (el.weight === people.weight) {
            return true;
        }
       });
    return newFilterWeight();
}

function lookingUpOccupation(people) {
    let occupationtInput = prompt('What is the occupation of the person? Please enter.');
    let newFilterOccupation = people.filter(function(el) {
        if (el.occupation === people.occupation) {
            return true;
        }
     });
    return newFilterOccupation();
}

function lookingUpEyeColor(people) {
    let eyeColorInput = prompt('What is the eye color of the person? Please enter.');
    let newFilterEyeColor = people.filter(function(el) {
        if (el.eyeColor === people.eyeColor) {
            return true;
        }
    });
    return newFilterEyeColor();
}

function lookingUpAge(){
    let ageInput = parseInt(prompt('What is the age of the person?'));
    let newFilterAge = people.filter(function(el){
        if(el.age === people.age){
            return true;

        }
    });
    return newFilterAge();
}



 
function displayPersonInfo(people){
    const searchFirstName = prompt ('Please enter first name of the person you are searching for.');
    const searchLastName = prompt ('Please enter last name of the person you are searching for.');
    for (i=0; i< data.length;i++){
        if (searchFirstName == data[i].firstName && searchLastName == data[i].lastName){
            console.log(data[i].id)
        }
    }
}



function mainMenu(person, people) {

    const mainMenuUserActionChoice = validatedPrompt(
        `Person: ${person.firstName} ${person.lastName}\n\nDo you want to know their full information, family, or descendants?`,
        ['info', 'family', 'descendants', 'quit']
    );

    switch (mainMenuUserActionChoice) {
        case "info":
            displayPersonInfo(person);
            //! TODO  displayPersonInfo() function is listed above.
            break;
        case "family":
            //! TODO
            let personFamily = findPersonFamily(person, people);
            displayPeople('Family', personFamily);
            break;
        case "descendants":
            //! TODO
            let personDescendants = findPersonDescendants(person, people);
            displayPeople('Descendants', personDescendants);
            break;
        case "quit":
            return;
        default:
            alert('Invalid input. Please try again.');
    }

    return mainMenu(person, people);
}

function displayPeople(displayTitle, peopleToDisplay) {
    const formatedPeopleDisplayText = peopleToDisplay.map(person => `${person.firstName} ${person.lastName}`).join('\n');
    alert(`${displayTitle}\n\n${formatedPeopleDisplayText}`);
}

function validatedPrompt(message, acceptableAnswers) {
    acceptableAnswers = acceptableAnswers.map(aa => aa.toLowerCase());

    const builtPromptWithAcceptableAnswers = `${message} \nAcceptable Answers: ${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')}`;

    const userResponse = prompt(builtPromptWithAcceptableAnswers).toLowerCase();

    if (acceptableAnswers.includes(userResponse)) {
        return userResponse;
    }
    else {
        alert(`"${userResponse}" is not an acceptable response. The acceptable responses include:\n${acceptableAnswers.map(aa => `\n-> ${aa}`).join('')} \n\nPlease try again.`);
        return validatedPrompt(message, acceptableAnswers);
    }
}

function exitOrRestart(people) {
    const userExitOrRestartChoice = validatedPrompt(
        'Would you like to exit or restart?',
        ['exit', 'restart']
    );

    switch (userExitOrRestartChoice) {
        case 'exit':
            return;
        case 'restart':
            return app(people);
        default:
            alert('Invalid input. Please try again.');
            return exitOrRestart(people);
    }

}