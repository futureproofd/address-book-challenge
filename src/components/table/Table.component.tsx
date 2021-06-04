import React from "react";
import styled from "styled-components";

const STable = styled.table`
  background-color: white;
  border: 1px solid darkgrey;
  border-spacing: 0px;
  border-radius: 2px;
  font-size: 12px;
  width: 100%;

  th {
    color: black;
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
    color: black;
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

export const Table = ({ tableHead, tableData }: any) => {
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
        {tableData.map((data: any[], index: React.Key) => (
          <tr key={index}>
            {data.map((prop, index) => {
              return <td key={index}>{prop}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </STable>
  );
};
