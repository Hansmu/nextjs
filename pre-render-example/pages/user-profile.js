export default function UserProfilePage(props) {
    return (
        <h1>{props.username}</h1>
    );
}

// We have access to the full request and response object inside of our context
export async function getServerSideProps(context) {
    // You could read the cookie from the request object and use it for data reading for initial data
    const { params, req, res } = context;

    return {
        props: {
            username: 'Stevie Wonder'
        }
    };
}