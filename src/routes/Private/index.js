
import PaginaServico from "../../pages/PaginaServico";
import ProtectedRoute from "../../security/ProtectedRoute";

const Private ={ 
    
        
            path: '/servico',
            element: <ProtectedRoute element={ <PaginaServico /> } />
        

        
    
}

export default Private;