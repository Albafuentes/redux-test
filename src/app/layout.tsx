'use client'
import "./globals.css";
import { storeRedux } from "@/redux/store";
import { Provider } from "react-redux";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <Provider store={storeRedux}> {children}</Provider>
            </body>
        </html>
    );
}
