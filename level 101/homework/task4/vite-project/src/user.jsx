import React from "react";
import { useParams } from "react-router-dom";


const User = () => {
    const { id } = useParams();

    return (
        <div>
            <Route path="/user/:id" element={<User />} />
            <h1>User Page</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

export default User;