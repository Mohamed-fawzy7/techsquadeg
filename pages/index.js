import Head from 'next/head'
import { useEffect, useState } from 'react';
import New from '../components/New'
import styles from '../styles/Home.module.css'



export default function Home({newsData}) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(newsData.news){
            setNews(newsData.news);
        }    
        window.isFetchingData = false;
        document.getElementById("scrolling").addEventListener("scroll", handleScroll);
        return () => document.getElementById("scrolling").removeEventListener("scroll", handleScroll)
    }, []);

    async function handleScroll(){
        if(window.isFetchingData === false && isScrolledToBottom()){
                window.isFetchingData = true;
                const res = await fetch(`http://80.240.21.204:1337/news?skip=${page * 10}&limit=10`);
                const newsData = await res.json();
                setNews(oldNews => [...oldNews, ...newsData.news])
                window.isFetchingData = false;
                let newPage = page + 1;
                setPage(newPage);
            }
    }
    
    function isScrolledToBottom(){
        const element = document.querySelector('#scrolling');
        
        // check if the element is at the bottom or nearby by 200px max
        if (element.scrollHeight <= element.scrollTop + element.offsetHeight + 200){
            return true
        }
        return false;
    }
    
    return (
        <>
        <Head>
            <title>News Task</title>
        </Head>
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className={`col-md-3 ${styles.left}`}>Fixed left</div>
                    <div className="col-md-6">
                        <div className={styles.center} id="scrolling">
                            {news.map((singleNew, i) => <New key={i} singleNew={singleNew} />)}
                        </div>
                    </div>
                    <div className={`col-md-3 ${styles.right}`}>Fixed right</div>
                </div>
            </div>
        </div>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch('http://80.240.21.204:1337/news?skip=12&limit=10');
    const newsData = await res.json();
    return {props: {newsData}}
}