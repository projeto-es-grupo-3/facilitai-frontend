import Head from 'next/head';
import { AuthContext } from "@/context/authContext";
import React from 'react';
import Router from 'next/router';

export default function Dashboard() {
    const authContext = React.useContext(AuthContext);
  
    React.useEffect(() => {
      authContext.isUserAuthenticated()
      ? Router.push("/dashboard")
      : Router.push("/login");
      }, []);
  
    return (
     <>
      <Head>
       <title>Dashboard</title>
      </Head>
      <div>
       <h2>Dashboard {authContext.authState.user}</h2>
      </div>
     </>
   );
  }