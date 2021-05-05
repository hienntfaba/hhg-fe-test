import { PayloadAction } from '@reduxjs/toolkit';
import { Employee } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { employeeSaga } from './saga';
import { EmployeeState } from './types';
import { DEFAULT_PAGE_SIZE } from '../../../../constants/paginate';

export const initialState: EmployeeState = {
  loading: false,
  employees: [],
  total: 0,
  paginate: {
    page: 1,
    size: DEFAULT_PAGE_SIZE,
  },
  isAddEmployeeSuccessfully: false,
  loadingAddEmployee: false,
};

const slice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getEmployees(state, action: PayloadAction<Record<string, any>>) {
      state.loading = true;
      state.paginate = {
        ...state.paginate,
        page: action.payload.page,
      };
    },
    getEmployeesSuccessfully(
      state,
      action: PayloadAction<{ employees: Employee[] }>,
    ) {
      state.loading = false;
      state.employees = action.payload.employees
        ? action.payload.employees.slice(
            (state.paginate.page - 1) * state.paginate.size,
            state.paginate.page * state.paginate.size,
          )
        : [];
      state.total = action.payload.employees?.length
        ? action.payload.employees?.length / state.paginate.size
        : 0;
    },
    getEmployeesFailed(state) {
      state.loading = false;
    },
    addEmployee(state, action: PayloadAction<{ employee: Employee }>) {
      state.loadingAddEmployee = true;
    },
    addEmployeeSuccessfully(state) {
      state.loadingAddEmployee = false;
      state.isAddEmployeeSuccessfully = true;
    },
    addEmployeeFailed(state) {
      state.loadingAddEmployee = false;
      state.isAddEmployeeSuccessfully = false;
    },
    afterEmployeeSuccessfully(state) {
      state.isAddEmployeeSuccessfully = false;
    },
    resetState(state) {
      state = Object.assign(state, initialState);
    },
  },
});

export const { actions: employeeActions } = slice;

export const useEmployeeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: employeeSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useEmployeeSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
