import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthContext } from "@/contexts/AuthContext";
import {useContext, useEffect} from 'react';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem("user") !=  undefined) {
      authContext.setAuthState({
        token:localStorage.getItem("token"),
        user:localStorage.getItem("user")
      })
    }

    if (!authContext.isUserAuthenticated()) {
      router.push("/login")
    } 
  }, [])


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