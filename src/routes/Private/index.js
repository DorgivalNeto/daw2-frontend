import PaginaCadastroadm from "../../pages/PaginaCadastroadm";
import PaginaServico from "../../pages/PaginaServico";

const Private ={ 
    path: '/',
    children: [
        {
            path: 'servico',
            element: <PaginaServico />
        },

        {
            path: 'Cadastroadm',
            element: <PaginaCadastroadm />
        }
    ]

}

export default Private;