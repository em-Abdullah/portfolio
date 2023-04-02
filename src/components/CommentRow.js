

export default function CommentRow({ getContact  }) {
  return (
    <tr>
        <td>{getContact.name }</td>
        <td>{getContact.email}</td>
        <td>{getContact.comment}</td>
        <td>{getContact.createdAt}</td>

    </tr>
  )
}
