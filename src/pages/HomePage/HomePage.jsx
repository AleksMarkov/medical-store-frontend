//HomePage.jsx
import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default HomePage;
// return isLoading ? (
//   <Loader />
// ) : (
//   <Container>
//     <Sidebar showSidebar={showSidebar} />
//     <MainContainer>
//       <Header openSidebar={openSidebar} showSidebar={showSidebar} />
//       {boards.length > 0 && !currentBoard._id && (
//         <Navigate to={`/home/${boards[0]._id}`} />
//       )}
//       {boards.length > 0 && <Outlet />}
//       {!boards.length && <HomePageText />}
//     </MainContainer>
//   </Container>
// );
