import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

// export default function home() {
  export default function home({results}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const navigate = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [results, setResults] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/movies`).then((res) => {
  //     return res.json()
  //   }).then((res) => {
  //     setResults(res.results)
  //   })
  // }, [])

  return (
    <div className="mainDiv">
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img
              onClick={() => navigate(movie.id, movie.original_title)}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            <h4 onClick={() => navigate(movie.id, movie.original_title)}>
              {movie.original_title}
            </h4>
          </div>
        ))}
        <style jsx>{`
          .mainDiv {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items :center;
          }
          .container {
            /* width: 1000px; */
            display: grid;
            grid-template-columns: 300px 300px;
            padding: 20px;
            gap: 20px;
            justify-content: center;
          }
          .movie {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            cursor: pointer;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

//! SSR
// export async function getServerSideProps() {
//   const { results } = await (
//     await fetch(`http://localhost:3000/api/movies`)
//   ).json();
//   // console.log(results)
//   return {
//     props: {
//       results,
//     },
//   };
// }

//! SSG
export async function getStaticProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  // console.log(results)
  return {
    props: {
      results,
    },
  };
}
