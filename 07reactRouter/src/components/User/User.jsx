import React from "react";

import { useParams } from "react-router-dom";

function User(props) {
  const { userId } = useParams();
  return (
    <div className="bg-gray-700 text-center text-3xl p-4 text-white">
      User: {userId}
    </div>
  );
}

export default User;
