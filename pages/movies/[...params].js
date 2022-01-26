import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail() {
  const router = useRouter();
  const [title, id] = router.query.params || [];
  console.log(router);
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

// export function getServerSideProps(ctx) {
//   console.log(ctx);
//   return {
//     props: {
//       params,
//     },
//   };
// }
