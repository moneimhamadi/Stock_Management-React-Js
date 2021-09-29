import axios from 'axios';
const Movement_Rest_Api = 'http://localhost:8090/utss/tn/AllMovements';
const Add_Movement_Rest_Api = 'http://localhost:8090/utss/tn/addMovement';
const Add_Movement_Rest_Api_Supply_Reception =
  'http://localhost:8090/utss/tn/supplyReception';
const Add_Movement_Rest_Api_Destruction =
  'http://localhost:8090/utss/tn/destruction';

class MovementServices {
  getAllMovement() {
    return axios.get(Movement_Rest_Api);
  }

  addMovement(Movement) {
    return axios.post(Add_Movement_Rest_Api, Movement);
  }

  SupplyReception(Movement, idStock) {
    return axios.post(
      Add_Movement_Rest_Api_Supply_Reception + idStock,
      Movement
    );
  }

  Destruction(Movement, idStock) {
    return axios.put(
      Add_Movement_Rest_Api_Destruction + '/' + idStock,
      Movement
    );
  }
}

export default new MovementServices();
