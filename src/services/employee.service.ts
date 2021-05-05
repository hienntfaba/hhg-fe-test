import { Employee } from 'types';
import { ApiService } from './api.service';

class EmployeeServiceFactory extends ApiService {
  getAll() {
    return this.get<Employee[]>('/employees');
  }
  create(employee: Employee) {
    return this.post<Employee>('/employees', employee);
  }
}

export const EmployeeService = new EmployeeServiceFactory();
