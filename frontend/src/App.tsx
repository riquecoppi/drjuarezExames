import Navbar from "components/navbar";
import FundoTemplate from "components/fundo-template";
import Listing from "components/lista";



function App() {
  return (
    <div>
         

      <Navbar />
       
      <FundoTemplate />
        <div className="lista-exames">
            <Listing />
       </div>
         
       
    </div>
  );
}

export default App;
