//--------------------------------------VARIABLES----------------------------------------------
var tableData;
var accountTypeObj={};
var clientTypeObj={};
var account={};
//---------------------------------------DOM----------------------------------------------------------
$(document).ready(function(){
    // Llamamos las funciones en los botones    
    ajax();//asincrono
})
//----------------------------AJAX---------------------------------------------------------------
function ajax(){
    $.get("http://localhost:3000/api/login", function(data){ // Peticion GET que recibe los datos de una tabla SQL
        tableData=data; // Guardamos la información que obtenemos por le get en una variable
        createTable(); 
        validations();
        createObjects();
    })
        .fail(function(){ // En caso de Error a la hora de conectarnos al servidor nos muestra un alert
            alert("error");
        })
       
    }
//--------------------FUNCTIONS----------------------------------------------------------------------------------
function createTable(){
   
    let lengthOfObject = Object.keys(tableData.resultats).length; // Esta variable recoge la longitud del objeto recibido por la base de datos
    
    // bucles para la creacion de inputs y insertar en la tabla html los valores de la peticion get
        for (let i = 0; i <lengthOfObject; i++){
            let html = '<input type="text" id="dni'+i+'" class="form-control form-control-sm" value="'+tableData.resultats[i].DNI+'">';
            $("#dni"+i).append(html)
        }
        for (let i = 0; i < lengthOfObject; i++){
            let html = '<input type="text" id="name'+i+'" class="form-control form-control-sm" value="'+tableData.resultats[i].Name+'">';
            $("#name"+i).append(html)
        }
        for (let i = 0; i < lengthOfObject; i++){
            let html = '<input type="text" id="accountType'+i+'" class="form-control form-control-sm" value="'+tableData.resultats[i].Account_Type+'">';
            $("#actype"+i).append(html)
        }
        for (let i = 0; i < lengthOfObject; i++){
            let html = '<input type="text" id="accountType'+i+'" class="form-control form-control-sm" value="'+tableData.resultats[i].Amount+'">';
            $("#amount"+i).append(html)
        }
        for (let i = 0; i < lengthOfObject; i++){
            if((0<=tableData.resultats[i].Amount) && (tableData.resultats[i].Amount>=10000)){
                let html = '<input type="text" id="clienttype'+i+'" class="form-control form-control-sm" readonly onmousedown="resturn false" value="Poor Client">';
                $("#clienttype"+i).append(html)
            }else if((10001<=tableData.resultats[i].Amount) && (tableData.resultats[i].Amount >= 100000)){
                let html = '<input type="text" id="clienttype'+i+'" class="form-control form-control-sm" readonly onmousedown="resturn false" value="Normal Client">';
                $("#clienttype"+i).append(html)
            }else if(100001<=tableData.resultats[i].Amount){
                let html = '<input type="text" id="clienttype'+i+'" class="form-control form-control-sm" readonly onmousedown="resturn false" value="Very Rich Client">';
                $("#clienttype"+i).append(html)
            }else{
                console.log("Error")
            }
        }
        for (let i = 0; i < lengthOfObject; i++){
            let html = '<input type="text" id="entrydate'+i+'" class="form-control form-control-sm datepicker" value="'+tableData.resultats[i].entry_date+'">';
            $("#entrydate"+i).append(html)
        }
        //acaba de crear la tabla
              
        $(".datepicker").datepicker(); // esta funcion realiza que en las clase datepicker tengan el valor datepicker
        datepickerCat();
       
//}
}
function validations(){

    let lengthOfObject = Object.keys(tableData.resultats).length;  // Esta variable recoge la longitud del objeto recibido por la base de datos

    // Funcion para validar la columna DNI
    $("#btnValidar").click(function(){
        for(let i = 0; i < lengthOfObject; i++){
            if($("#dni"+i).val().match(/[0-9]{7,8}[A-Z]/)){
                $("#dni"+i).append("<div class='alert alert-success col-10'><strong>Este DNI es correcto: </strong>"+ dni +"</div>");
            }else{
                $("#dni"+i).append("<div class='alert alert-danger col-10'><strong>Este DNI es falso: </strong>" +dni+ "</div>");
            }
        }
        for(let i = 0; i < lengthOfObject; i++){
            if($("#name"+i).val().match(/^[a-zA-Z ÑñÁáÀàÉéÈèËëÍíÌìÏïÓóÒòÚúÙùÜü\s]+$/)){
                $("#resultNom"+i).html("<div class='alert alert-success col-10'><strong>El nombre es correcto</strong></div>");
            }else{
                $("#resultNom"+i).html("<div class='alert alert-danger col-10'><strong>Este nombre no es válido</strong></div>");
            }   
        }
        for(let i = 0; i < lengthOfObject; i++){
            if($("#amount"+i).val().match(/^[0-9]+$/)){
                $("#resultAmount").html("<div class='alert alert-success col-10'><strong>El dinero es correcto</strong></div>");
            }else{
                $("#resultAmount").html("<div class='alert alert-danger col-10'><strong>Este dinero no es válido</strong></div>")
            }    
        }
    })

    // Funcion para validar la columna Type Client
    $("#amount").blur(function(){
        for(let i = 0; i < lengthOfObject; i++){
            if($("#amount"+i).val() <= 10000){
                $("#clienttype"+i).val("Poor client");
            }else if($("#clienttype"+i).val() >= 10001){
                $('#myCtype').val("Normal client");
            }else if($("#clienttype"+i).val() <= 100000){
                $("#clienttype"+i).val("Normal client");
            }else{
                $("#clienttype"+i).val("Very rich client");
            }    
        }
    })
}
function createObjects(){
    let lengthOfObject = Object.keys(tableData.resultats).length;
    for (let i = 0; i<=lengthOfObject; i++){

    }
}
// Datepicker en catalan
function datepickerCat(){
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
        maxDate: -1,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ca']);
};
$(".datepicker").datepicker();
     
        
    


    
