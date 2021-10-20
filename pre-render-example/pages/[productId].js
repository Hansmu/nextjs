import {Fragment} from 'react';
import fs from 'fs/promise';
import path from 'path';

export default function ProductDetailsPage(props) {
    return (
        <Fragment>
            <h1>{props.loadedProduct.title}</h1>
            <p>{props.loadedProduct.description}</p>
        </Fragment>
    );
}

// getStaticProps cannot be as simple here as in the index page as this is dynamic. It needs to know the IDs it can use.
export async function getStaticProps(context) {
    const {params} = context; // Path params
    const productId = params.productId;

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    if (!product) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            loadedProduct: product
        }
    };
}

async function getData() {
    // You can replace this with the API calls.
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFileSync(filePath);
    return JSON.parse(jsonData);
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => ({params: {productId: product.id}}));

    if (ids.length) {
        return {
            paths: ids,
            fallback: true // The point of a fallback is to say that we don't want to define all possible IDs, paths
        };
    }

    return {
        paths: [
            { params: { productId: 'p1' } }, // This will say to pre-generate the page for the page for these IDs
            { params: { productId: 'p2' } }, // This will say to pre-generate the page for the page for these IDs
            { params: { productId: 'p3' } } // This will say to pre-generate the page for the page for these IDs
        ],
        fallback: true // Fallback is used if there are paths that shouldn't be pre-generated. So you define the ones that should be up top
        // and the ones that are less frequently visited will use a fallback. This means that the React code should also
        // be able to deal with this by checking the undefined state of the props property variable and such. Can also use
        // blocking to block rendering `fallback: 'blocking'` until the pre-generation is finished.
    };
}