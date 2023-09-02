import { useMemo } from 'react';
import { COLUMNS } from './TableColumns';
import { useAppSelector } from '../../../store/store';
import { useTable } from 'react-table';
import './TableStyles.css';

const Table = () => {
    const allUsers = useAppSelector((state) => state.allUsers.allUsers);

    const columns = useMemo(() => COLUMNS, []);
    const datas = useMemo(() => allUsers, [allUsers]);

    const { getTableProps, headerGroups, getTableBodyProps, prepareRow, rows } = useTable({ columns, data: datas });

    return (
        <table {...getTableProps} className="table-container">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className="table-heading-container">
                        {headerGroup.headers.map((columns) => (
                            <th {...columns.getHeaderProps()} className="table-heading-items">
                                {columns.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()} className="table-body-items">
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
