import { FC } from "react";
import { LayoutType } from "./type";
import { Header } from "../Header";
import { Footer } from "../Footer"

export const Layout: FC<LayoutType> = (props) => {
    const { children } = props;
    return (
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}