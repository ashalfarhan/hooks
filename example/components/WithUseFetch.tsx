import * as React from 'react';
import { useFetch } from '../../dist';

type FetchResult = { title: string }[];

export default function WithUseFetch({
  url = 'https://jsonplaceholder.typicode.com/posts?_limit=10',
}) {
  const { success, loading, result, error } = useFetch<FetchResult>(url);
  return (
    <div>
      <h1 data-testid="hooks-heading">useFetch</h1>
      {loading && <p data-testid="loading-text">Loading ....</p>}
      {error && <p data-testid="error-text">Error...</p>}
      {success &&
        result &&
        result.length &&
        result.map((post, idx) => (
          <p key={idx} data-testid="result-nodes">
            {post.title}
          </p>
        ))}
    </div>
  );
}
