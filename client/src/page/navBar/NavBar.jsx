import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     axios.get("/api/tokens/refresh").then(data => {
//       setUser(data.data.user)
//       setAccessToken(data.data.accessToken)
//     })

//   },[])
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/profile">На главную</Link>
          </li>
          <li>
            <Link to="/">Выйти</Link>
          </li>
          {/* <li>{user?.name}</li> */}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
