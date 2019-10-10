function getDogImages(breed) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(response => response.json())
    .then(responseJson => {
        console.log(responseJson);

        if(responseJson.status !=="success") {
            throw Error(responseJson.message);
        }
        else {
            $(".dogImages").html(`<img src="${responseJson.message}" alt="random dog images class="dog-pic">`)
        }
    })
    .catch(error => {
        console.log("Something went wrong:" + error.message);
        $(".dogImages").html(`<p>Something went wrong: ${error.message}</p>`);
    });
}

function handleFormSubmit() {
    $("form").submit(function(event) {
        event.preventDefault();
        let breed = $("input[type=text]").val();
        getDogImages(breed);
    });
}


function loadApp() {
    console.log("App is loaded! Waiting for submit!");
    handleFormSubmit();
}

$(loadApp());