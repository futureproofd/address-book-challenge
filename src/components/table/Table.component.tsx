import React from "react";
import styled from "styled-components";

const STable = styled.table`
  background-color: #f9f9f9;
  border-spacing: 0px;
  font-size: 12px;
  width: 100%;

  th {
    color: #191919;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 14px 8px;
    text-align: left;
    text-transform: uppercase;

    &:first-child {
      border-radius: 4px 0 0 0;
    }
  }

  td {
    color: #191919;
    max-width: 480px;
    padding: 8px;
    white-space: normal;
    letter-spacing: 0.25px;

    * {
      line-height: 18px;
    }
  }

  tr {
    text-align: left;

    &.row-click {
      cursor: pointer;
    }
  }

  thead tr,
  tr:nth-child(even) {
    background-color: #efefef;
  }

  tbody tr:hover {
    background-color: #b5c9dd;
  }
`;

interface TableProps {
  tableHead: string[];
  tableData: { [key: string]: any }[];
}

export const Table = ({ tableHead, tableData }: TableProps) => {
  return (
    <STable>
      {tableHead !== undefined ? (
        <thead>
          <tr>
            {tableHead.map((header: string, index: React.Key) =>
              header === "" ? (
                <td key={index} />
              ) : (
                <th
                  key={index}
                  id={
                    typeof header === "string"
                      ? header.replace(/\s/, "_")
                      : header
                  }
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
      ) : null}
      <tbody>
        {tableData.map((data, index: React.Key) => (
          <tr key={index}>
            {data.map((prop: any, index: number) => {
              return <td key={index}>{prop}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </STable>
  );
};
