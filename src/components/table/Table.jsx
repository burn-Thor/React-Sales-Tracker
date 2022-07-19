import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabl = () => {

const rows = [
    {
        id: 1143155,
        product: "Acer Nitro",
        img: "https://",
        customer: "John Smith",
        date: "1 March",
        amount: 785,
        method: "Cash on Delivery",
        status: "Approved",
    },
    {
        id: 2235235,
        product: "Acer Nitro",
        img: "https://",
        customer: "Joe Smith",
        date: "5 March",
        amount: 785,
        method: "Online",
        status: "Pending",
    },
    {
        id: 2357741,
        product: "Acer Nitro",
        img: "https://",
        customer: "Jane Smith",
        date: "30 March",
        amount: 785,
        method: "Online",
        status: "Approved",
    },
    {
        id: 2342355,
        product: "Playstation 5",
        img: "https://",
        customer: "Jeffry Smith",
        date: "11 March",
        amount: 1200,
        method: "Online",
        status: "Approved",
    }
]

  return (
    
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div></TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell"><span className={`status ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

 
  )
}

export default Tabl