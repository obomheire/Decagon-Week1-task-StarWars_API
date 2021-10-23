const results = document.querySelector("#results");

const asyncFetch = async (value) => {
    
    const res = await fetch(`https://swapi.dev/api/people/${value}`);
    const data = await res.json();
 
    displayResult(data);
}

let displayResult = (data) => {
    let output
    const {name, height, gender} = data;

                output = `
                <div class="">
                    <h4 class="">${name}</h4>
                    <div class="">
                    <spam style="">Height:</spam> ${height}</br>
                    <spam style="">Gender:</spam> ${gender}</br>
                    <img src="images/dummy.png" alt="">
                </div>
                `   
                results.innerHTML = output
  
}


let test;
let selectEl = document.querySelectorAll(".btn")
// console.log(selectEl);
let count = selectEl.length;

for (let k = 0; k < count; k++){
    selectEl[k].addEventListener("click", function(){
        test = this.innerHTML

        switch(test){

            case "Luke Skywalker":
                asyncFetch(1);
                break;
            
            case "C-3PO":
                asyncFetch(2);
                    break;
            case "R2-D2":
                asyncFetch(3);
                    break;
            case "Darth Vader":
                asyncFetch(4);
                    break;
            case "Leia Organa":
                asyncFetch(5);
                    break;
            case "Owen Lars":
                asyncFetch(6);
                    break;
            case "Beru Whitesun lars":
                asyncFetch(7);
                    break;
            case "R5-D4"  :
                asyncFetch(8);
                    break;
            case "Biggs Darklighter":
                asyncFetch(9);
                    break;
            case "Obi-Wan Kenobi":
                    asyncFetch(10);
                    break;
                default :

        }
    })
}
