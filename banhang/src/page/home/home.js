import Ship from "../../components/Ship/ship";
import Product from "../../components/product/product";
import Siderbar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";

export default function Home() {
    return (
        <>
        <Topbar />
        <Siderbar/>
        <Ship/>
        <Product/>
        </>
    )
}