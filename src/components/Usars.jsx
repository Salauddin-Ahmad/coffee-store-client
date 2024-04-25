import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Usars = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    // make sure user is confirmed to delete
    fetch(
      `https://coffee-store-server-cl.vercel.app/user/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log("deleted successfully");

          // remove the user from UI with filter
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1>Users: {loadedUsers.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.length && users?.map((user) => (
              <tr key={user._id}>
                <td>1</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usars;
