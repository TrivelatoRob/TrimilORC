



const divMaterial = document.getElementById("material");

function SolicitarMedidas(perfil){
    if (perfil == "redondo"){
        const divMedidas = document.createElement("div", {class:"medidas"});
        const diametro = document.createElement("input", {type: "number", id: "diametro", placeholder: "Diametro"});
        const comprimento = document.createElement("input", {type: "number", id: "comprimento", placeholder: "Comprimento"});
        divMedidas.appendChild(diametro);
        divMedidas.appendChild(comprimento);
        return divMedidas;
    }
    else if (perfil == "quadrado"){
        const divMedidas = document.createElement("div", {class:"medidas"});
        const bitola = document.createElement("input", {type: "number", id: "bitola", placeholder: "Bitola"});
        const comprimento = document.createElement("input", {type: "number", id: "comprimento", placeholder: "Comprimento"});
        divMedidas.appendChild(bitola);
        divMedidas.appendChild(comprimento);
        return divMedidas;
    }
    else if (perfil == "sextavado"){
        const divMedidas = document.createElement("div", {class:"medidas"});
        const bitola = document.createElement("input", {type: "number", id: "bitola", placeholder: "bitola"});
        const comprimento = document.createElement("input", {type: "number", id: "comprimento", placeholder: "Comprimento"});
        divMedidas.appendChild(bitola);
        divMedidas.appendChild(comprimento);
        return divMedidas;
    }
    else if (perfil == "tubo"){
        const divMedidas = document.createElement("div", {class:"medidas"});
        let diametroExterno = document.createElement("input");
        diametroExterno.type = "number";
        diametroExterno.id = "diametroext";
        diametroExterno.placeholder = "Diametro Externo";
        const diametroInterno = document.createElement("input", {type: "number", id: "diametroint", placeholder: "Diametro Interno"});
        const comprimento = document.createElement("input", {type: "number", id: "comprimento", placeholder: "Comprimento"});
        divMedidas.appendChild(diametroExterno);
        divMedidas.appendChild(diametroInterno);
        divMedidas.appendChild(comprimento);
        return divMedidas;
    }
    else if (perfil == "chapa"){
        const divMedidas = document.createElement("div", {class:"medidas"});
        const espessura = document.createElement("input", {type: "number", id: "espessura", placeholder: "Espessura"});
        const largura = document.createElement("input", {type: "number", id: "largura", placeholder: "Largura"});
        const comprimento = document.createElement("input", {type: "number", id: "comprimento", placeholder: "Comprimento"});
        divMedidas.appendChild(espessura);
        divMedidas.appendChild(largura);
        divMedidas.appendChild(comprimento);
        return divMedidas;
    }


}

const perfilMaterial = document.getElementById("perfil");
perfilMaterial.addEventListener("change", function() {
    divMaterial.appendChild(SolicitarMedidas(perfilMaterial.value));
});