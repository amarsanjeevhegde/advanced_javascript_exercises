function fetchData() {
    fetch("https://fakestoreapi.com/users")
    .then(response => {
       // allows me to see the status of the application in more details 
    //    if (response.ok) {
    //       throw Error("ERROR");
    //     }
       return response.json();
    })
    .then(data => {
        console.log(data);
        // map is sorting function that goes through an array and help display the selected information
        const html = data.map(user => {
            // fetchs and displays particular data from the API
            // The array will only show firstname and lastname
             return '<div class="card" id="card" style="width: 300px; padding: 10px; margin: 10px;"><img class="card-img-top" src="./bootstrap-logo.svg" alt="Card image cap">Firstname: ' + user.name.firstname + '<br> Latname: ' + user.name.lastname + '<br> Phone: ' + user.phone + '<div> <a href="#" class="btn btn-primary">Button</a></div></div>';
        })
        .join("");
        console.log(html);
        document
        .querySelector("#card1")
        .insertAdjacentHTML("afterbegin", html);

    }).catch(error => {
        // Tells me the error if the API does not connect 404 error
        console.log(error);
    });
}

fetchData();

// html.forEach(p => {
//     content += `
//       <div id="keyBoard" class="col-md-4 mt-2">
//                 <div class="card" style="width: 18rem;">
//                     <img src="./bootstrap-logo.svg" class="card-img-top img-fluid" alt="Card image cap">
//                     <div class="card-body">
//                         <h5 class="card-title" id="card">${user.name.firstname}</h5>
//                         <p class="card-text" id="card">${user.name.lastname}</p>
//                         <p class="card-text">${user.phone}</p>
//                         <a href="#" class="btn btn-primary" id="card"></a>
//                     </div>
//                 </div>
//             </div>
//     `
//   });
  
//   document.querySelector("#card").innerHTML = content;
  