import React from "react"
import BarraDeNavegacao from "../../components/BarraDeNavegacao";
import Cardlist from "../../components/Cardlist";

function PaginaServico(){
    
    return (
        <div>
            <h1>
                <BarraDeNavegacao/>
                <Cardlist/>
            </h1>
        </div>
    );
}

export default PaginaServico;