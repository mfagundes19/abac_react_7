import React from "react";

class FormSubmit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSubmited: false,
            fullname : null,
            age: null,
            gender: null,
            civil_state: null            
        };
        
    }

    handleClick(event) {
        event.preventDefault();
        if(document.getElementById("fullname").value == "") {
            document.getElementById("fullname").style.borderColor = "red";
            alert('Você precisa informar um nome válido');
            return false;
        }
        if(document.getElementById("age").value == "") {
            document.getElementById("age").style.borderColor = "red";
            alert('Você precisa informar uma idade válida');
            return false;
        }
        if(document.getElementById("gender_m").checked == false && document.getElementById("gender_f").checked == false) {
            alert('Você precisa informar um gênero válido');
            return false;
        }
        let fullname = document.getElementById("fullname").value;
        let age = document.getElementById("age").value;
        let gender = "";
        if(document.getElementById("gender_m").checked == true) {
            gender = document.getElementById("gender_m").value;
        }
        if(document.getElementById("gender_f").checked == true) {
            gender = document.getElementById("gender_f").value;
        }
        let civil_state = "";
        if(document.getElementById("civil_state_s").checked == true) {
            civil_state = document.getElementById("civil_state_s").value;
        }
        if(document.getElementById("civil_state_f").checked == true) {
            civil_state = document.getElementById("civil_state_f").value;
        }
        if(document.getElementById("civil_state_v").checked == true) {
            civil_state = document.getElementById("civil_state_v").value;
        }
        this.state = {
            isSubmited: true,
            fullname: fullname,
            age: age,
            gender: gender,
            civil_state: civil_state         
        };
        document.getElementById("contato").reset();
        this.refresh();
    }
    refresh() {
        let table = "";
        table+= "<table width='100%' cellpadding='3' cellspaccing='2' style='border: solid 1px #cdcdcd;'>";
        table+= "<thead>";
            table+= "<tr style='background-color: #CDCDCD; font-size: 11px !important;'>";
                table+= "<td width='30%'>Nome Completo</td>";
                table+= "<td width='20%'>Idade</td>";
                table+= "<td width='20%'>Gênero</td>";
                table+= "<td width='30%'>Estado Civil</td>";
            table+= "</tr>";
        table+= "</thead>";
        table+= "<tr style='font-size: 11px !important;'>";
            table+= "<td>"+this.state.fullname+"</td>";
            table+= "<td>"+this.state.age+"</td>";
            table+= "<td>"+this.state.gender+"</td>";
            table+= "<td>"+this.state.civil_state+"</td>";
        table+= "</tr>";
        table+= "</table>";
        document.getElementById("response").innerHTML = table;
    }
    render() {
        return  (
            <div>
                <button type="submit" className="btn-submit" onClick={(event) => this.handleClick(event)}>Enviar</button>
            </div>
        );
    }
}

export default FormSubmit;