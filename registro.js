function mostrar_persona() {

    let apellido_mostrado = document.getElementById("apellido").value;
    let nombre_mostrado = document.getElementById("nombre").value;
    let hto_ingresado = document.getElementById("hto").value;
    let blancos_ingresados = document.getElementById("globulos blancos").value;
    let plaquetas_ingresadas = document.getElementById("plaquetas").value;
    let sodio_ingresado = document.getElementById("sodio").value;
    let potasio_ingresado = document.getElementById("potasio").value;
    let glucosa_ingresada = document.getElementById("glucemia").value;
    let hb_glicosilada_ingresada = document.getElementById("hemoglobina glicosilada").value;
    let colesterol_ingresado = document.getElementById("colesterol total").value;
    let ldl_ingresado = document.getElementById("ldl").value;
    let hdl_ingresado = document.getElementById("hdl").value;
    let trigliceridos_ingresados = document.getElementById("trigliceridos").value;
    let bilirubina_directa_ingresada = document.getElementById("bilirubina directa").value;
    let bilirubina_indirecta_ingresada = document.getElementById("bilirubina indirecta").value;
    let tgp_ingresado = document.getElementById("tgp").value;
    let tgo_ingresado = document.getElementById("tgo").value;
    let tp_ingresado = document.getElementById("tp").value;
    let kptt_ingresado = document.getElementById("kptt").value;
    let creatinina_ingresada = document.getElementById("creatinina").value;
    let urea_ingresada = document.getElementById("urea").value;
    let vsg_ingresada = document.getElementById("vsg").value;



    let texto = "Datos Cargados Correctamente del Paciente: " + apellido_mostrado + "," + nombre_mostrado + ".";

    if (hto_ingresado >= 50 || hto_ingresado < 28) {
        texto += "Hematocrito alterado " + hto_ingresado;
    }
    if (blancos_ingresados >= 10000 || blancos_ingresados < 4000) {
        texto += "Globulos blancos alterados " + blancos_ingresados;
    }
    if (plaquetas_ingresadas >= 400000 || plaquetas_ingresadas < 80000) {
        texto += "Plaquetas alteradas " + plaquetas_ingresadas;
    }
    if (sodio_ingresado >= 150 || sodio_ingresado < 135) {
        texto += "Sodio alterado " + sodio_ingresado;
    }
    if (potasio_ingresado >= 5.5 || potasio_ingresado < 3.5) {
        texto += "Potasio alterado " + potasio_ingresado;
    }
    if (glucosa_ingresada >= 100 || glucosa_ingresada < 40) {
        texto += "Glucemia alterada " + glucosa_ingresada;
    }
    if (hb_glicosilada_ingresada >= 7) {
        texto += "Hemoglobina Glicosilada alterada" + hb_glicosilada_ingresada;
    }
    if (colesterol_ingresado >= 200) {
        texto += "Colesterol total alterado " + colesterol_ingresado;
    }
    if (ldl_ingresado >= 160) {
        texto += "LDL alterado " + ldl_ingresado;
    }
    if (hdl_ingresado <= 40) {
        texto += "HDL alterado " + hdl_ingresado;
    }

    if (trigliceridos_ingresados >= 200) {
        texto += "Triglicéridos alterados" + trigliceridos_ingresados;
    }

    if (bilirubina_directa_ingresada >= 1) {
        texto += "Bilirubina Directa alterada " + bilirubina_directa_ingresada;
    }

    if (bilirubina_indirecta_ingresada >= 1) {
        texto += "Bilirubina Indirecta alterado " + bilirubina_indirecta_ingresada;
    }

    if (tgp_ingresado >= 40) {
        texto += "TGP alterado " + tgp_ingresado;
    }

    if (tgo_ingresado >= 40) {
        texto += "TGO alterado " + tgo_ingresado;
    }

    if (tp_ingresado < 50 || tp_ingresado > 150) {
        texto += "TP alterado " + tp_ingresado;
    }

    if (kptt_ingresado >= 40 || kptt_ingresado <= 20) {
        texto += "KPTT alterado " + kptt_ingresado;
    }

    if (creatinina_ingresada >= 1) {
        texto += "Creatinina alterada " + creatinina_ingresada;
    }

    if (urea_ingresada >= 40) {
        texto += "Urea alterada " + urea_ingresada;
    }

    if (vsg_ingresada >= 20) {
        texto += "Eritrosedimentación alterada " + vsg_ingresada;
    }

    let nuevo_elemento = document.createElement("li");
    let texto_nodo = document.createTextNode(texto);
    nuevo_elemento.appendChild(texto_nodo);
    document.getElementById("lista_pacientes").appendChild(nuevo_elemento);
}


