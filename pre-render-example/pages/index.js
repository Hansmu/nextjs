import fs from 'fs/promise'; // Next.js understands what imports we use in our static props and nowhere else and it'll know
// to take out the imports from our static code bundle.
import path from 'path';

import Link from 'next/link';

function HomePage(props) {
    const {products} = props;

  return (
    <ul>
        {
            products.map(product => (
                <li key={product.id}>
                    <Link href={`/${product.id}`}>
                        {product.title}
                    </Link>
                </li>
            ))
        }
    </ul>
  );
}

export async function getStaticProps() {
    // This function runs on build, so if you have DB calls here, then the data will be outdated on the client side initial load.
    // Thus, fetch the data in the React component as well.
    // process.cwd gets us the current working directory, which is the overall project directory.
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);

    if (!data) {
        return {
            redirect: {
                destination: '/no-data'
            }
        };
    }

    if (data.products.length === 0) {
        return {
            notFound: true
        };
    }

    return {
        props: { // This is required
            products: data.products
        },
        revalidate: 10 // the number of seconds before re-generation of the pre-rendered page
    };
}

export default HomePage;
