/**
 *
 * EmployeePage
 *
 */
import { Pagination } from 'app/components/Pagination';
import { Table } from 'app/components/Table';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useEmployeeSlice } from './slice';
import { selectEmployee } from './slice/selectors';
import { queryString } from '../../../utils/history';
import { DEFAULT_PAGE_SIZE } from '../../../constants/paginate';
import { Button } from '../../components/Button';
import { AddEmployeeModal } from '../../components/AddEmployeeModal';

interface Props {}

export function EmployeePage(props: Props) {
  const { actions } = useEmployeeSlice();
  const {
    employees,
    total,
    loadingAddEmployee,
    isAddEmployeeSuccessfully,
  } = useSelector(selectEmployee);
  const dispatch = useDispatch();
  const history = useHistory();

  const [filter, setFilter] = React.useState<Record<string, any>>({
    page: 1,
  });
  const [showAddEmployeeModal, setShowAddEmployeeModal] = React.useState<
    boolean
  >(false);

  React.useEffect(() => {
    dispatch(
      actions.getEmployees({ page: filter.page, size: DEFAULT_PAGE_SIZE }),
    );
  }, [dispatch, actions, filter]);

  React.useEffect(() => {
    const { page } = queryString.parse(history.location.search);
    setFilter({
      page: parseInt(page) || 1,
    });
  }, [history.location.search]);

  React.useEffect(() => {
    return () => {
      dispatch(actions.resetState());
    };
  }, [dispatch, actions]);

  React.useEffect(() => {
    if (isAddEmployeeSuccessfully) {
      dispatch(
        actions.getEmployees({ page: filter.page, size: DEFAULT_PAGE_SIZE }),
      );
      dispatch(actions.afterEmployeeSuccessfully());
      setShowAddEmployeeModal(false);
    }
  }, [dispatch, actions, filter.page, isAddEmployeeSuccessfully]);

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Position',
        accessor: 'position',
      },
    ],
    [],
  );

  const handlePageChange = ({ selected }: { selected: number }): void => {
    const search = queryString.stringify({
      ...filter,
      page: selected,
    });
    history.push({
      search,
    });
  };

  const handleShowAddEmployeeModal = (isShow: boolean): void => {
    setShowAddEmployeeModal(isShow);
  };

  const handleAddEmployee = (values): void => {
    dispatch(actions.addEmployee(values));
  };

  return (
    <Div>
      <div className="text-right mb-2">
        <Button size="sm" onClick={() => handleShowAddEmployeeModal(true)}>
          + New
        </Button>
      </div>
      <Table columns={columns} data={employees} />
      <Pagination
        pageCount={total}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={filter.page}
      />
      <AddEmployeeModal
        show={showAddEmployeeModal}
        handleClose={() => handleShowAddEmployeeModal(false)}
        onSubmit={handleAddEmployee}
        isSubmitting={loadingAddEmployee}
      />
    </Div>
  );
}

const Div = styled.div``;
