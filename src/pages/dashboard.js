import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

// @components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Polygon from '@/components/Polygon/Polygon';
import Category from '@/components/Category/Category';
import LastPosts from '@/components/LastPosts/LastPosts';
import PostType from '@/components/LastPosts/PostType';
import UserTab from '@/components/UserTab/UserTab';

// @contents
import DashboardContent from '@/contents/DashboardContent';

// @contexts
import { AuthContext } from "@/contexts/AuthContext";

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("token") != undefined && localStorage.getItem("user") != undefined) {
      authContext.setAuthState({
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user")
      })
    }

    if (!authContext.isUserAuthenticated()) {
      router.push("/login")
    }
  }, [])

  const HandleLogOut = async () => {
    const res = await fetch(`${process.env.BACK_END_HOST}/logout`, {
      method: "DELETE",
      headers: {
        "Authentication": `Bearer {${localStorage.getItem("token")}}`,
      },
    })
    res.json().then(() => {
      authContext.setAuthState({
        token: null,
        user: null
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    })
    router.push("/login")

  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Polygon />
      <Header logged={true}>
        <UserTab name={authContext.authState.user} image={null} HandleLogOut={HandleLogOut} />
      </Header>
      <DashboardContent>
        <Category />
        <LastPosts>
          <PostType
            textButton={"Procurando alguém para dividir apartamento no endereço"}
            category={"books"}
          />
        </LastPosts>
      </DashboardContent>
      <Footer />
    </>
  );
}