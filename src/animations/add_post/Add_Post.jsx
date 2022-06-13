import React, { useState, useRef, useEffect } from "react";
import Styles from "./Add_Post.module.scss";
import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import gsap from "gsap";

function Add_post() {
	const [open, setOpen] = useState(false);
	const tl = useRef();
	const btn = useRef();

	const icon_div1 = useRef();
	const icon_div2 = useRef();
	const icon_div3 = useRef();
	const icon_div4 = useRef();

	const icon1 = useRef();
	const icon2 = useRef();
	const icon3 = useRef();
	const icon4 = useRef();

	const item1 = useRef();
	const item2 = useRef();
	const item3 = useRef();
	const item4 = useRef();

	// tl.current = gsap.timeline();

	const toggle = () => {
		if (!open) {
			tl.current = gsap
				.timeline()
				.to(btn.current, {
					transform: "translateX(-50%) rotate(45deg)",
					transition: "0.3s",
				})
				.to(icon_div1.current, { y: "-250", transition: "0.2s" }, "-=0.3")
				.to(icon_div2.current, { y: "-200", transition: "0.2s" }, "-=0.2")
				.to(icon_div3.current, { y: "-150", transition: "0.2s" }, "-=0.3")
				.to(icon_div4.current, { y: "-100", transition: "0.2s" }, "-=0.4")
				.to(icon1.current, { color: "#fff", transition: "0.1s" }, "-=0.1")
				.to(icon2.current, { color: "#fff", transition: "0.3s" }, "-=0.6")
				.to(icon3.current, { color: "#fff", transition: "0.3s" }, "-=0.6")
				.to(icon4.current, { color: "#fff", transition: "0.3s" }, "-=0.6")
				.to(item1.current, { width: "50px", transition: "0.3s" })
				.to(item2.current, { width: "70px", transition: "0.3s" }, "-=0.2")
				.to(item3.current, { width: "70px", transition: "0.3s" }, "-=0.2")
				.to(item4.current, { width: "50px", transition: "0.3s" }, "-=0.2");
		} else {
			tl.current.reversed(true);
		}
		setOpen(!open);
	};

	return (
		<div className={Styles.add_post}>
			<ul>
				<li ref={icon_div1}>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="bxs:pencil" ref={icon1}/>
					</div>
					<p ref={item1}>Blogs</p>
				</li>
				<li ref={icon_div2}>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="ic:outline-article" ref={icon2}/>
					</div>
					<p ref={item2}>Articles</p>
				</li>
				<li ref={icon_div3}>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="fluent:people-team-16-regular" ref={icon3}/>
					</div>
					<p ref={item3}>Projects</p>
				</li>
				<li ref={icon_div4}>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="carbon:skill-level-advanced" ref={icon4} />
					</div>
					<p ref={item4}>Skills</p>
				</li>
			</ul>
			<Button className={Styles.add_btn} onClick={toggle} ref={btn}>
				<Icon icon="carbon:add" color="#0063ff" />
			</Button>
		</div>
	);
}

export default Add_post;
