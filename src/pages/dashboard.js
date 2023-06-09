import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

// @components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Polygon from '@/components/Polygon/Polygon';
import Category from '@/components/Category/Category';
import LastPosts from '@/components/LastPosts/LastPosts';
import PostType from '@/components/LastPosts/PostType';
import UserTab from '@/components/UserTab/UserTab';
import FixedButton from '@/components/FixedButton/FixedButton';

// @contents
import DashboardContent from '@/contents/DashboardContent';

// @contexts
import { AuthContext } from "@/contexts/AuthContext";

export default function Dashboard() {
  const [posts, setPosts] = useState();
  const authContext = useContext(AuthContext);
  const router = useRouter();

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
    const GetPosts = async () => {
      var raw;
      var retorno;
      raw  = JSON.stringify({
        "endereco": null,
        "valor_min": null,
        "valor_max": null,
        "num_comodos": null
      }); 
      

      let res = await fetch(`${process.env.BACK_END_HOST}/search-apartments`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Authentication": `Bearer ${localStorage.getItem("token")}`,
          },
          body:raw
      })

      var data = await res.json();
      var reversed = [...data].reverse();
      retorno = reversed
      raw  = JSON.stringify({
        "nome_livro": null,
        "nome_autor": null,
        "genero": null,
        "preco_min": null,
        "preco_max": null
      });  

      res = await fetch(`${process.env.BACK_END_HOST}/search-books`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authentication": `Bearer ${localStorage.getItem("token")}`,
        },
        body:raw
      })
    data = await res.json();
    reversed = [...data].reverse();
    retorno.concat(reversed);
    setPosts(retorno)
  }
  GetPosts()
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
        {
                    posts?.filter((item, idx) => idx < 3).map((c, index) =>(
                      <PostType
                      key={index}
                      textButton={c.descricao}
                      category={"other"}
                    />
                    ))
        }
          
        </LastPosts>
      </DashboardContent>
      <FixedButton/>
      <Footer />
    </>
  );
}