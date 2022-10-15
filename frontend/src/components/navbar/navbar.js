import React from "react";
import "./navbar.css";
import { IoSearch } from "react-icons/io5";
export default function Navbar() {
	return (
		<div className="nav-cont">
			<div className="nav-search">{IoSearch}</div>
		</div>
	);
}
