import Header from "./Header";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import NavLink from 'react-bootstrap/NavLink';

const Dashboard = () => {


    return (
        <>
        <Header/>
        <div>
      
        <CDBSidebarHeader >
          <a href="/" >
            Menu
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent >
          <CDBSidebarMenu>
            <NavLink href="/addClient" >
              <CDBSidebarMenuItem>Add New Client</CDBSidebarMenuItem>
            </NavLink>
            <NavLink href="/viewClient" >
              <CDBSidebarMenuItem >View Client Details </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
     
          
      
    </div>
        
        </>
    )
}

export default Dashboard;