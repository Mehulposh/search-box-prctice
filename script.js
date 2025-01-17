// Array with integers
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const searchInput = document.getElementById("searchBx");
const displayBox = document.getElementById("result");

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim();

    if(searchTerm === ""){
        displayBox.innerHTML = "";
        return;
    }

    const searchNum = Number(searchTerm);
    // Display results
    if(searchNum <=6){
        multiply(searchNum);
    }
    else{
        displayResults(searchNum);
    }
});

function displayResults(results) {
    // Clear previous results
    displayBox.innerHTML = '';

    
    if(array.includes(results)) {
        displayBox.innerHTML = '<div class="result-1 no-results">true</div>';
        return;
    }
    else{
        displayBox.innerHTML = '<div class="result-1 no-results">false</div>';
        return;
    }

    
}


function multiply(results){
    displayBox.innerHTML = 'RESULT';

    const square = results*results;
    displayBox.textContent = square;

    return;

}