// export default function CommentRow({ getContact  }) {
//   return (
//     <tr>
//         <td>{getContact.name }</td>
//         <td>{getContact.email}</td>
//         <td>{getContact.comment}</td>
//         <td>{getContact.createdAt}</td>

//     </tr>
//   )
// }
import { TableCell, TableRow } from "@mui/material"

export default function CommentRow({ getContact }) {
    return (
        <TableRow>
            <TableCell>{getContact.name}</TableCell>
            <TableCell>{getContact.email}</TableCell>
            <TableCell>{getContact.comment}</TableCell>
            <TableCell>{getContact.createdAt}</TableCell>
        </TableRow>
    )
}
