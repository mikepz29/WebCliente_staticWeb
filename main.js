var participants = [];

//Creo una funcion
//function showParticipants(data){}

//Funcion para enseñar los participantes
const showParticipants = (data) => {
    //Creo una variable (un array auxiliar)
    let arrayAuxiliar = [];

    //Recorre cada elemento del array y añade a arrayAuxiliar el elemento nombre
    data.   forEach(element => {
        arrayAuxiliar.push(element.name)
    });

    //Lo añado al parrafo #users del HTML
    $("#users").text("Participants: " + arrayAuxiliar);
    $("#users").html("<strong>Participants: </strong>"  + arrayAuxiliar)
}

//Funcion para coger una participante al azar
const getWinner = (data) => {
    //Creo una variable que coge un elemento del array al azar
    const aleatorio = Math.floor(Math.random() * data.length);

    //Pongo el nombre del elemento del array seleccionado al azar
    $("#selected").html("<strong>Seleccionado: </strong>" + data[aleatorio].name);
}

$(function(){
    //Para hacer una peticion http a un API
    $.ajax ({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        contentType: "application/json",

        //response es la data que recogemos
        success: function(response){
            participants = response;
            showParticipants(participants);
        },
        error:function(error){
            console.log(error);
            alert(error);
        }
    });

    //Para que cuando pulse el boton se ejecuta la funcion getWinner
    $(".botonSelect").click(function(){
        getWinner(participants);
    });

});