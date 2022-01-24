import './styles.css';
import { Exame } from '../../types/exame';


type Props ={
    exame: Exame;
}


function ExameCard ( { exame } : Props ) {
   
    

    
    
    return(
        
         <div>
            
                <div className="default-exame">
                    
                   <h3><a href="w">{exame.cnomeexam}</a></h3>
                   <div className='linha-exame'></div>
                </div>

                 
              
         </div>
               
        
        
        
    )
}

export default ExameCard;