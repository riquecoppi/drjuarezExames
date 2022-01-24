import {ReactComponent as FundoSuperior} from '../../assets/img/fundo-superior-1.svg';
import {ReactComponent as FundoInferior} from '../../assets/img/fundo-inferior.svg';
import './styles.css'; 

import Pagination from "../Pagination";

 function FundoTemplate (){

    return(
         
           

           <div className='container' >
              
              
               <div>

                     
                    
                       
                        
                   

                     <FundoSuperior />
                     
                       <Pagination /> 
                   
                     <div className='align-fundo-inferior'>
                     <FundoInferior /> 
                     </div>
                     
               </div>


           </div>
              
          

         
          
    
        )};
        
        export default FundoTemplate;