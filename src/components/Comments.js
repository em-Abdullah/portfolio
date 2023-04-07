// import {gql, useQuery} from '@apollo/client'
// import CommentRow  from './CommentRow';
// const GET_COMMENTS = gql `
//     query GetContact
//     {
//         getContact
//         {
//           comment
//           createdAt
//           email
//           name
//         }

//     } `;

// export default function Comments() {

//   const {loading, error, data} = useQuery(GET_COMMENTS)
//   if (loading) return <p>Loading...</p>
//   if (error) return <p>Error :</p>
//   return (
//     <div >
//         {!loading && !error && (
//             <table className="table-hover mt=3">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Comment</th>
//                         <th>Time</th>
//                      </tr>
//                 </thead>
//                 <tbody>
//                     {data.getContact.map(getContact  => (
//                         <CommentRow key={getContact.id} getContact = {getContact}  />
//                     ))}
//                 </tbody>
//             </table>
//         ) }

//     </div>
//   )
// }

import { gql, useQuery } from "@apollo/client"
import {
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import CommentRow from "./CommentRow"

const StyledTableContainer = styled(TableContainer)`
    max-height: 500px;
`

const StyledTable = styled(Table)`
    min-width: 650px;
`

const GET_COMMENTS = gql`
    query GetContact {
        getContact {
            comment
            createdAt
            email
            name
        }
    }
`

export default function Comments() {
    const { loading, error, data } = useQuery(GET_COMMENTS)

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return <Typography>Error: {error.message}</Typography>
    }

    return (
        <StyledTableContainer component={Paper}>
            <Typography variant="h4" component="h2" align="center" gutterBottom>
                Here are the comments from all users
            </Typography>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Comment</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.getContact.map((getContact) => (
                        <CommentRow
                            key={getContact.id}
                            getContact={getContact}
                        />
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    )
}
