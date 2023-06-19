import Head from 'next/head';
import { useRouter } from 'next/router'
import { useState, useContext, useEffect } from  'react';

// @components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Polygon from '@/components/Polygon/Polygon';
import PostsContent from '@/contents/PostsContent';
import UserTab from '@/components/UserTab/UserTab';
import Post from '@/components/Post/Post';
import FixedButton from '@/components/FixedButton/FixedButton';

// @contexts
import { AuthContext } from "@/contexts/AuthContext";

export default function Posts() {

    const [posts, setPosts] = useState();
    const { query } = useRouter()
    const authContext = useContext(AuthContext);

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
            if (query.id === "search-apartments") {
                raw  = JSON.stringify({
                    "endereco": null,
                    "valor_min": null,
                    "valor_max": null,
                    "num_comodos": null
                  }); 
            } else if (query.id === "search-books") {
                raw  = JSON.stringify({
                    "nome_livro": null,
                    "nome_autor": null,
                    "genero": null,
                    "preco_min": null,
                    "preco_max": null
                  }); 
            }
    
            const res = await fetch(`${process.env.BACK_END_HOST}/${query.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authentication": `Bearer ${localStorage.getItem("token")}`,
                },
                body:raw
            })
            const data = await res.json();
            setPosts(data)
        }
        GetPosts();

    }, []);

    const HandleLogOut = async () => {
        const res = await fetch(`${process.env.BACK_END_HOST}/logout`, {
            method: "DELETE",
            headers: {
                "Authentication": `Bearer ${localStorage.getItem("token")}`,
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
                <title>Anúncios</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Polygon/>
            <Header logged={true}>
                <UserTab name={authContext.authState.user} image={null} HandleLogOut={HandleLogOut} />
            </Header>
            <PostsContent>
                {
                    posts?.map((c) => (
                        <Post
                        category="apartaments"
                        titlePost={c.titulo}
                        description={c.descricao}
                        advertiser={c.anunciante}
                        price={c.preco}
                        address={c.endereco}
                        area={c.area}
                        bedrooms={c.comodos}
                    />))      
                }
            </PostsContent>
            <FixedButton/>
            <Footer />
        </>
    )
}