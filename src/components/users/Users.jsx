import { useLoaderData } from "react-router-dom";
import Navbar from "../header/Navbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Container from "@mui/material/Container";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Users = () => {
  const loadedUsers = useLoaderData();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Container sx={{ marginTop: "60px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Active</StyledTableCell>
                <StyledTableCell align="center">Age</StyledTableCell>
                <StyledTableCell align="center">Height</StyledTableCell>
                <StyledTableCell align="center">Gender</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loadedUsers.map((row) => (
                <StyledTableRow key={row?.name}>
                  <StyledTableCell component="th" scope="row">
                    {row?.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row?.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.isActive}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.age} yrs
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.height}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row?.gender}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DeleteIcon />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <DriveFileRenameOutlineIcon />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Users;
