export default function UserIdPage(props) {
    return (
        <h1>
            {props.id}
        </h1>
    );
}

export async function getServerSideProps(context) {
    const {params} = context;
    // getStaticProps is not used to get the params, can only use serverSideProps when you go down that path
    const userId = params.userId;

    return {
        props: {
            id: 'userId-' + userId
        }
    };
}