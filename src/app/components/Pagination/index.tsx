/**
 *
 * Pagination
 *
 */
import * as React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

interface Props {}

export function Pagination(props: Props & ReactPaginateProps) {
  const { forcePage = 1, onPageChange, ...restProps } = props;
  return (
    <ReactPaginate
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      activeClassName="active"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      disableInitialCallback
      forcePage={forcePage - 1} // start with 0
      onPageChange={({ selected }) =>
        onPageChange ? onPageChange({ selected: selected + 1 }) : onPageChange
      }
      {...restProps}
    />
  );
}
