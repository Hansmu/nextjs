// Used to add HTML to all over the app.
import Document, {NextScript, Html, Head, Main} from "next/document"; // This head is not the same as the one used for HTML head

class MyDocument extends Document {
    // This is the default structure without any additions. Have to recreate that before configuration.
    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}