// external modules
import { useState, useEffect } from "react";
import api from "database/conn";
import { toast } from "react-toastify";

// components
import Banner from "components/Banner";

//CSS
import styles from "./Home.module.scss";
import defaultStyles from "styles/_defaultStyles.module.scss";

const Home = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ dough, setDough ] = useState('1');
  const [ edge, setEdge ] = useState('1');
  const [ flavors, setFlavors ] = useState([]);

  const [ doughList, setDoughList ] = useState([]);
  const [ edgeList, setEdgeList ] = useState([]);
  const [ flavorList, setFlavorList ] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //removing duplicates
    let selectedFlavors = [];

    flavors.forEach(flavor => {
      if (selectedFlavors.indexOf(flavor) === -1) {
        selectedFlavors.push(flavor);
      }
    });

    if(selectedFlavors.length > 3) {
      toast.error('Você só pode selecionar até 3 sabores!');
      setFlavors([]);
      return;
    } else if (selectedFlavors.length === 0) {
      toast.error('Você precisa selecionar ao menos 1 sabor!');
      return;
    }

    await api.post('/pizza/create', {
      dough_id: dough,
      edge_id: edge,
      flavors: [...selectedFlavors],
    }).then(() => {
      setFlavors([]);
      setDough('1');
      setEdge('1');
      toast.success('Pedido realizado com sucesso!');
    }).catch(err => {
      toast.error(err.response.data.message);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    api.get('/dough/').then(response => {
      setDoughList(response.data);
    }).catch(err => {
      console.log(err.response.data);
    });
    api.get('/edge/').then(response => {
      setEdgeList(response.data);
    }).catch(err => {
      console.log(err.response.data);
    });
    api.get('/flavor/').then(response => {
      setFlavorList(response.data);
    }).catch(err => {
      console.log(err.response.data);
    });
    setIsLoading(false)
  }, [])

  return (
    <>
    <Banner title={'Faça seu pedido!'}/>
    <section className={defaultStyles.containerDefault}>
      <div className={defaultStyles.pageHeader}>
        <h2>Monte sua pizza:</h2>
      </div>
      {!isLoading && (
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="dough">Selecione a Massa:</label>
            <select name="dough" value={dough} onChange={(e) => setDough(e.target.value)}>
              {doughList.map(dough => (
                <option value={dough.id} key={dough.type}>{dough.type}</option>
              ))}
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="edge">Selecione a Borda:</label>
            <select name="edge" value={edge} onChange={(e) => setEdge(e.target.value)}>
              {edgeList.map(edge => (
                <option value={edge.id} key={edge.type}>{edge.type}</option>
              ))}
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="flavors">Selecione os sabores (máx 3):</label>
            <select name="flavor" multiple value={flavors} onChange={(e) => setFlavors([...flavors, e.target.value])} className={styles.multiOption}>
              {flavorList.map(flavor => (
                <option key={flavor.id} value={flavor.id}>{flavor.name}</option>
              ))}
            </select>
          </div>
          <input type='submit' value='Finalizar Pedido' />
        </form>
      </div>
      )}
    </section>
    </>
  );
};

export default Home;