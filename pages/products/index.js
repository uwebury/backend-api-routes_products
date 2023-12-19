import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductList() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All products</h1>
      <ul>
        {data.map(({ id, name, price, currency, description, category }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>Description: {description}</p>
            <p>
              Price: {price} {currency}
            </p>

            <p>Category: {category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
