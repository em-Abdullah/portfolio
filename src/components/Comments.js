import {gql, useQuery} from '@apollo/client'
import CommentRow  from './CommentRow';
const GET_COMMENTS = gql `
    query GetContact 
    {
        getContact 
        {
          comment
          createdAt
          email
          name
        }
      
    } `;

export default function Comments() {
    
  const {loading, error, data} = useQuery(GET_COMMENTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>
  return (
    <div >
        {!loading && !error && (
            <table className="table-hover mt=3">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                        <th>Time</th>
                     </tr>
                </thead>
                <tbody>
                    {data.getContact.map(getContact  => (
                        <CommentRow key={getContact.id} getContact = {getContact}  />
                    ))}
                </tbody>
            </table>
        ) }
        

        
      
    </div>
  )
}
