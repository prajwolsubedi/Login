// @ts-ignore
import React, { useEffect, useMemo } from 'react';
import { COLUMNS } from './TableColumns';
import getAllUsers from '../../../api/getAllUsers';
import { useAppSelector } from '../../../store/store';
import { useTable } from 'react-table';

const Table = () => {
    const allUsers = useAppSelector((state) => state.allUsers.allUsers);
    const { mutate } = getAllUsers();
    useEffect(() => {
        mutate();
    }, []);

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => allUsers, []);
    console.log('columns, data', columns, data);
    console.log('allusers', allUsers);

    const { getTableProps, headerGroups, getTableBodyProps, prepareRow, rows } = useTable({ columns, data });

    return (
        <>
            <div>table</div>
            <table {...getTableProps}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((columns) => (
                                <th {...columns.getHeaderProps()}>{columns.render('Header')}</th>
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
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
