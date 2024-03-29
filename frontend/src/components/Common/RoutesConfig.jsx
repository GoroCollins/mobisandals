import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage";
import ShoeDetail from "../Shoes/ShoeDetail";
import Shoes from "../Shoes/Shoes";
import AddShoe from "../Shoes/AddShoe";
import Contact from "../Contact";

export default function RoutesConfig() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/shoe/:id" element={<ShoeDetail />} />
            <Route path="/add-shoe" element={<AddShoe />} />
            <Route path="/message" element={<Contact />} />
        </Routes>
    )
}