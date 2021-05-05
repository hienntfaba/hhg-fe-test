import { call, put, takeLatest } from 'redux-saga/effects';
import { EmployeeService } from 'services/employee.service';
import { handleError } from 'utils/error';
import { employeeActions as actions } from '.';

function* getEmployees() {
  try {
    const { data } = yield call([EmployeeService, EmployeeService.getAll]);
    yield put(
      actions.getEmployeesSuccessfully({
        employees: data,
      }),
    );
  } catch (e) {
    handleError(e);
    yield put(actions.getEmployeesFailed());
  }
}

function* addEmployee(action) {
  try {
    yield call([EmployeeService, EmployeeService.create], action.payload);
    yield put(actions.addEmployeeSuccessfully());
  } catch (e) {
    handleError(e);
    yield put(actions.addEmployeeFailed());
  }
}

export function* employeeSaga() {
  yield takeLatest(actions.getEmployees.type, getEmployees);
  yield takeLatest(actions.addEmployee.type, addEmployee);
}
