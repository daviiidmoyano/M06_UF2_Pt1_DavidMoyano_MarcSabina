//--------------------------------------Variables----------------------------------------------
var table;

//---------------------------------------DOM----------------------------------------------------------
$(document).ready(function(){
    // Llamamos las funciones en los botones
    
    ajax();
    $("btnValidar").click(function(){
        validarDni(dni);
        validarNom(nom);
        validarAmount(amount);
        validarEntryDate(edate);
    })
})
//------------------------------------------------------------------------------------------------

//----------------------------AJAX---------------------------------------------------------------


function ajax(){
    $.get("http://localhost:3000/api/login", function(){
        // table = resultats;
        // console.log(table);  
        $("#prueba").append(res)  
    })
        .fail(function(){
            alert("error");
        })
        
}
//---------------------------------------------------------------------------------------------------
// Funcion para validar la columna DNI
function validarDni(dni){
    if(dni.length == 9){
        let numero = dni.substring(0,8);
        let letra = dni.substr(dni.length-1,1);
        if(isNaN(numero) || !isNaN(letra)){
            $("#resultDni").html("<div class='alert alert-warning col-2'><strong>Formato incorrecto.</strong></div>")
        }else {
            let calculo = numero % 23;
            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            if(letra.toUpperCase() == letras[calculo]){
                $("#resultDni").html("<div class='alert alert-success col-2'><strong>Este DNI es correcto: </strong>"+ dni +"</div>");
            }else {
                $("#resultDni").html("<div class='alert alert-danger col-2'><strong>Este DNI es falso: </strong>" +dni+ "</div>");
            }
        }
    }else {
        $("#resultDni").html("<div class='alert alert-warning col-2'><strong>Tamaño incorrecto.</strong></div>");
    }
}

// Funcion para validar la columna Nombre
function validarNom(nom){
    if(nom.length > 0){
        let expRegLetras = /^[a-zA-Z ÑñÁáÀàÉéÈèËëÍíÌìÏïÓóÒòÚúÙùÜü\s]+$/;
        if(expRegLetras.test(nom)){
            $("#resultNom").html("<div class='alert alert-success col-2'><strong>El nombre es correcto</strong></div>");
        }else{
            $("#resultNom").html("<div class='alert alert-danger col-2'><strong>Este nombre no es válido</strong></div>");
        }
    }else {
        $("#resultNom").html("<div class='alert alert-warning col-2'><strong>Tamaño incorrecto.</strong></div>");
    }
}

// Funcion para validar la columna Amount
/*validarAmount(amount){
    if(amount.length > 0){
        let expRegNum = /^[0-9]+$/;
        if(expRegNum.test(amount)){
            $("#resultAmount").html("<div class='alert alert-success col-2'><strong>El dinero es correcto</strong></div>")
        }else{
            $("#resultAmount").html("<div class='alert alert-danger col-2'><strong>Este dinero no es válido</strong></div>")
        }
    }else{
        $("#resultAmount").html("<div class='alert alert-warning col-2'><strong>Tamaño incorrecto.</strong></div>")
    }
}*/

// Funcion para validar la columna Entry Date
/*validarEntryDate(edate){

}*/

// Datapicker en catalan
function datapickerCat(){
    $.datepicker.regional['ca'] = {
        closeText: 'Tanca',
        prevText: 'Anterior',
        nextText: 'Següent',
        currentText: 'Avui',
        monthNames: ['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'],
        monthNamesShort: ['gen','feb','març','abr','maig','juny','jul','ag','set','oct','nov','des'],
        dayNames: ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
        dayNamesShort: ['dg','dl','dt','dc','dj','dv','ds'],
        dayNamesMin: ['dg','dl','dt','dc','dj','dv','ds'],
        weekHeader: 'Set',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ca']);
}
    
