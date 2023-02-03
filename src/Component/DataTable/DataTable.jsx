import React from 'react'
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import "./DataTable.css"
import {db} from "../firebase" 
import { margin } from '@mui/system';
import { Delete } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border:0,
  },
}));


const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


function DataTable() {

  const [data, setData] = useState([]);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Students"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        // console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[])

  // const handleDelete = async (id) => {
  //   try {
  //     // await deleteDoc(doc(db, "Students"));
  //     // await db.collection("Students").doc(id).delete();
  //     await deleteDoc(doc(db, "Students/student", data.id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Students", id));
      console.log("c")
      
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
      
    }
  };
 


  // async function handleDelete(documentId) {
  //   try {
  //     await db.collection('Students').doc(documentId).delete();
  //     console.log('Document successfully deleted!');
  //   } catch (error) {
  //     console.error('Error deleting document: ', error);
  //   }
  // }




  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='dataTable'>
      <div className='header'>
        <p>Manage Students</p>
        <p>{date}</p>
      </div>
    <TableContainer className='tContainer' component={Paper}>
      <Table className='table' sx={{ maxWidth: 1100 }} aria-label="customized table">
        <TableHead  className='thead'>
          <TableRow>
            <StyledTableCell style={{background: "#F33823"}} >Name</StyledTableCell>
            <StyledTableCell style={{background: "#F33823"}}align="center">Class</StyledTableCell>
            <StyledTableCell style={{background: "#F33823"}}align="center">Roll NO.</StyledTableCell>
            <StyledTableCell style={{background: "#F33823"}}align="center">Edit/Delete</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody className='tBody'>
          {data.map((row) => (
            <StyledTableRow style={{maxWidth:1100}} key={row.name}>
              <StyledTableCell  component="th" scope="row">
                {row.firstName}&nbsp;{row.middleName}&nbsp;{row.lastName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.class}</StyledTableCell>
              <StyledTableCell align="center">{row.rollNumber}</StyledTableCell>
              <StyledTableCell align="center">{<div onClick={handleDelete}>Delete</div> }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default DataTable