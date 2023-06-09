import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

// @components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Polygon from '@/components/Polygon/Polygon';
import CreatePostForm from '@/components/CreatePostForm/CreatePostForm';
import UserTab from '@/components/UserTab/UserTab';
import CreatePostContent from '@/contents/CreatePostContent';
import FixedButton from '@/components/FixedButton/FixedButton';

// @contexts
import { AuthContext } from "@/contexts/AuthContext";

export default function CreatePost() {

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

    const SubmitPost = async (data) => {
        
        let image;
        if (data.image) {
            image = data.image
        }
        console.log(data);

        const res = await fetch(`${process.env.BACK_END_HOST}/create-ad`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data.post)
        })
        if(data.image) {
            res.json().then(async (data) => {
                console.log(data);
                const imageData = new FormData();
                imageData.append("ad_id", data.ad_id);
                if (data.image) {
                    imageData.append("ad_img", image);
                }
                
                const res = await fetch(`${process.env.BACK_END_HOST}/upload-image`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    },
                    body: imageData
                })
            })
        }
        router.push("/dashboard")
    }

    return (
        <>
            <Head>
                <title>Novo Anúncio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Polygon />
            <Header logged={true}>
                <UserTab name={authContext.authState.user} image={null} HandleLogOut={HandleLogOut} />
            </Header>
            <CreatePostContent>
                <CreatePostForm SubmitPost={SubmitPost} />
            </CreatePostContent>
            <FixedButton/>
            <Footer />
        </>
    )
}