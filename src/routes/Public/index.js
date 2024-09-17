import PaginaCadastro from "../../pages/PaginaCadastro";
import PaginaLogin from "../../pages/PaginaLogin";


const Public = { 
    path: '/',
    children: [
        {
            path: 'cadastro',
            element: <PaginaCadastro />
        },

        {
            path: 'login',
            element: <PaginaLogin />
        }

        
    ]

}

export default Public;