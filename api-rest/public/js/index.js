//--------------------------------------Variables----------------------------------------------
var tableData;
//---------------------------------------DOM----------------------------------------------------------
$(document).ready(function(){
    // Llamamos las funciones en los botones
    
     ajax();
     
    putClientType();
    //-----------------------------------------------------VALIDATIONS--------------------------------------------------------------------------------
    // Funcion para validar la columna DNI
    $("#btnValidar").click(function(){
        if($('#myDni').val().match(/[0-9]{7,8}[A-Z]/)){
            $("#resultDni").html("<div class='alert alert-success col-10'><strong>Este DNI es correcto: </strong>"+ dni +"</div>");
        }else{
            $("#resultDni").html("<div class='alert alert-danger col-10'><strong>Este DNI es falso: </strong>" +dni+ "</div>");
        }
    })

    // Funcion para validar la columna Nombre
    $("#btnValidar").click(function(){
        if($('#myName').val().match(/^[a-zA-Z ÑñÁáÀàÉéÈèËëÍíÌìÏïÓóÒòÚúÙùÜü\s]+$/)){
            $("#resultNom").html("<div class='alert alert-success col-10'><strong>El nombre es correcto</strong></div>");
        }else{
            $("#resultNom").html("<div class='alert alert-danger col-10'><strong>Este nombre no es válido</strong></div>");
        }
    })

    // Funcion para validar la columna Amount
    $("#btnValidar").click(function(){
        if($('#myAmount').val().match(/^[0-9]+$/)){
            $("#resultAmount").html("<div class='alert alert-success col-10'><strong>El dinero es correcto</strong></div>");
        }else{
            $("#resultAmount").html("<div class='alert alert-danger col-10'><strong>Este dinero no es válido</strong></div>")
        }
    })

    // Funcion para validar la columna Type Client
    $("#myAmount").blur(function(){
        if($('#myAmount').val() <= 10000){
            $('#myCtype').val("Poor client");
        }else if($('#myCtype').val() >= 10001){
            $('#myCtype').val("Normal client");
        }else if($('#myCtype').val() <= 100000){
            $('#myCtype').val("Normal client");
        }else{
            $('#myCtype').val("Very rich client");
        }
    })
    function putClientType(){
        
    }

})
//------------------------------------------------------------------------------------------------

//----------------------------AJAX---------------------------------------------------------------


function ajax(){
    $.get("http://localhost:3000/api/login", function(data){ 
        tableData=data;
        createTable();
        //console.log(data);
    })
        .fail(function(){
            alert("error");
        })
       
    }
//--------------------FUNCTIONS----------------------------------------------------------------------------------
function createTable(){
    console.log(tableData.resultats[0].DNI);
    //console.log(tableData.)
    for (let i = 0; i < tableData.resultats.length; i++){
        let html = '<input type="text" id="dni'+i+'" class="form-control form-control-sm" value="'+tableData.resultats[i].DNI+'">';
    }
}


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
    
