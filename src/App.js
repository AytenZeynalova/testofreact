import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modalbtn from "./companents/Modalbtn";
import { data } from "./data";
import './App.css';

const App = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <data />
      <input style={{marginLeft:500,border:"none",borderRadius:10,padding:12,marginTop:50}} onChange={(e) => setSearch(e.target.value)}></input>

      <TableContainer component={Paper}>
        <Table style={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" >
                <b>id</b>
              </TableCell>
              <TableCell align="right">
                <b>name</b>
              </TableCell>
              <TableCell align="right">
                <b>username</b>
              </TableCell>
              <TableCell align="right">
                <b>age</b>
                
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((row) => {
                return search.toLowerCase() === ""
                  ? row
                  : row.name.toLowerCase().includes(search);
              })
             
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modalbtn />
    </div>
  );
};

export default App;
