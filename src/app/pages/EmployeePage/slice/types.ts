import { Employee, Paginate } from 'types';

/* --- STATE --- */
export interface EmployeeState {
  loading: boolean;
  employees: Employee[];
  paginate: Paginate;
  total: number;
  isAddEmployeeSuccessfully: boolean;
  loadingAddEmployee: boolean;
}
