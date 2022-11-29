import { TableBody, TableContainer } from "@mui/material";
import { Table } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
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
export default function ResourceDashboardTable(props) {
    return (<div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell># Resource</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <StyledTableCell>
                            <Tooltip
                                disableFocusListener
                                disableTouchListener

                                title="click to view list of resources"
                            >
                                <Button
                                    onClick={(event) =>
                                        (window.location.href = "/listResource")
                                    }
                                >
                                    {props.resources.length}
                                </Button>
                            </Tooltip>
                        </StyledTableCell>

                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
}