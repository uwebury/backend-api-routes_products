import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { name, description, price, currency, category } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
      </p>

      <p>Category: {category}</p>
    </div>
  );
}
