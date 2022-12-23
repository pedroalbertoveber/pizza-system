//CSS
import defaultStyles from "styles/_defaultStyles.module.scss";
import styles from "./Controller.module.scss";

//components
import Banner from "components/Banner";

//external modules
import api from "database/conn";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Controller = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ orders, setOrders ] = useState([]);
  const [ status, setStatus ] = useState([]);

  const handleUpdate = async ({ id, status_id }) => {
    await api.patch(`/order/status/update/${id}`, {
      status_id,
    }).then(response => {
      toast.success(response.data.message);
    }).catch(err => {
      console.log(err.response.data);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    api.get('/order/').then(response => {
      setOrders(response.data);
    }).catch(err => {
      console.log(err.response.data);
    });

    api.get('/status/').then(response => {
      setStatus(response.data);
    }).catch(err => {
      console.log(err.response.data);
    })

    setIsLoading(false);
  }, []);

  return (
    <>
    <Banner title={'Controle'} />
    <section className={defaultStyles.containerDefault}>
      <div className={defaultStyles.pageHeader}>
        <h2>Controle de Pedidos</h2>
      </div>
      <div className={styles.tableContainer}>
        {!isLoading && (
          <table>
            <thead>
              <tr className={styles.tableHeader}>
                <th>Pedido</th>
                <th>Tipo de Massa</th>
                <th>Tipo de Borda</th>
                <th>Sabores</th>
                <th>Status</th>
                <th>Atualizar</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.pizza.doughes.type}</td>
                  <td>{order.pizza.edges.type}</td>
                  <td>
                    <ul>
                      {order.pizza.flavors.map(flavor => (
                        <li key={flavor.id}>{flavor.name}</li>
                      ))}
                    </ul>
                  </td>
                  <td className={styles.statusSelect}>
                    <select id={`status${order.id}`}>
                      {status.map(each => (
                        <option value={each.id} key={each.id} selected={each.id === order.status.id}>{each.type}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button onClick={() => handleUpdate({
                      id: order.id,
                      status_id: document.querySelector(`#status${order.id}`).value,
                    })}>
                      Atualizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
    </>
  );
};

export default Controller;