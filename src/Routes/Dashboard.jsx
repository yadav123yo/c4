
import Pagination from "../Componants/Pagination";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { Products } from "../Componants/Products";
const getData = (page) => {
  return axios.get(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`
    

  );
};
function Dashboard() {
  const [state, dispatch] = useContext(AppContext);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getData(page).then((res) => {
      setData(res.data.data);
      setTotalPages(res.data.totalPages);
    });
  }, [page]);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button
      
          onClick={() => dispatch({ type: "LOGOUT_SUCCESS" })}
        >
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
        </p>
      </div>
      <div>
        {" "}
        {data.map((data) => {
          return (
            <Products
            
              brand={data.brand}
              title={data.title}
              price={data.price}
              image = {data.image}
              id={data.id}
            />
          );
        })}
      </div>
      <div>
        <Pagination total={totalPages} current={page} changePage={setPage} />
      </div>
    </div>
  );
}

export default Dashboard;
