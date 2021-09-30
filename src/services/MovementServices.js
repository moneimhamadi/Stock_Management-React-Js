import axios from 'axios';
const Movement_Rest_Api = 'http://localhost:8090/utss/tn/AllMovements';
const Add_Movement_Rest_Api = 'http://localhost:8090/utss/tn/addMovement';
const Add_Movement_Rest_Api_Supply_Reception =
  'http://localhost:8090/utss/tn/supplyReception/';
const Add_Movement_Rest_Api_Destruction =
  'http://localhost:8090/utss/tn/destruction';

const AddMovement_Rest_Api_Internal_Production =
  'http://localhost:8090/utss/tn/inetrnalProduction/';
const AddMovement_Rest_Api_ToOtherSotre =
  'http://localhost:8090/utss/tn/toOtherStock/';
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

  InternalProduction(Movement, idStock) {
    return axios.post(
      AddMovement_Rest_Api_Internal_Production + idStock,
      Movement
    );
  }

  Destruction(Movement, idStock) {
    return axios.put(
      Add_Movement_Rest_Api_Destruction + '/' + idStock,
      Movement
    );
  }
  ToOtherStore(Movement, idStock, idStock1) {
    return axios.put(
      AddMovement_Rest_Api_ToOtherSotre + idStock + '/' + idStock1,
      Movement
    );
  }
}

export default new MovementServices();
