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
	const icon_div5 = useRef();
	const icon_div6 = useRef();
	const icon_div7 = useRef();

	const icon1 = useRef();
	const icon2 = useRef();
	const icon3 = useRef();
	const icon4 = useRef();
	const icon5 = useRef();
	const icon6 = useRef();
	const icon7 = useRef();

	const item1 = useRef();
	const item2 = useRef();
	const item3 = useRef();
	const item4 = useRef();
	const item5 = useRef();
	const item6 = useRef();
	const item7 = useRef();

	// tl.current = gsap.timeline();

	const toggle = () => {
		if (!open) {
			tl.current = gsap
				.timeline()
				.to(btn.current, {
					transform: " rotate(45deg)",
					transition: "0.3s",
				})
				.to(icon_div1.current, { y: "-400", transition: "0.2s" }, "-=0.3")
				.to(icon_div2.current, { y: "-350", transition: "0.2s" }, "-=0.3")
				.to(icon_div3.current, { y: "-300", transition: "0.2s" }, "-=0.3")
				.to(icon_div4.current, { y: "-250", transition: "0.2s" }, "-=0.3")
				.to(icon_div5.current, { y: "-200", transition: "0.2s" }, "-=0.2")
				.to(icon_div6.current, { y: "-150", transition: "0.2s" }, "-=0.3")
				.to(icon_div7.current, { y: "-100", transition: "0.2s" }, "-=0.4")
				.to(icon1.current, { color: "#fff", transition: "0.1s" }, "-=0.5")
				.to(icon2.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(icon3.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(icon4.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(icon5.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(icon6.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(icon7.current, { color: "#fff", transition: "0.3s" }, "-=0.4")
				.to(item1.current, { width: "90px", transition: "0.3s" }, "-=0.6")
				.to(item2.current, { width: "115px", transition: "0.3s" }, "-=0.4")
				.to(item3.current, { width: "70px", transition: "0.3s" }, "-=0.4")
				.to(item4.current, { width: "70px", transition: "0.3s" }, "-=0.4")
				.to(item5.current, { width: "70px", transition: "0.3s" }, "-=0.4")
				.to(item6.current, { width: "50px", transition: "0.3s" }, "-=0.4")
				.to(item7.current, { width: "35px", transition: "0.3s" }, "-=0.4");
		} else {
			tl.current.reversed(true);
		}
		setOpen(!open);
	};

	return (
		<div className={Styles.add_post}>
			<ul>
				<li ref={icon_div1}>
					<p ref={item1}>Skill Video</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="carbon:skill-level-advanced" ref={icon1} />
					</div>
				</li>

				<li ref={icon_div2}>
					<p ref={item2}>Presentation</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="fluent:people-team-16-regular" ref={icon2} />
					</div>
				</li>

				<li ref={icon_div3}>
					<p ref={item3}>Projects</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="fluent:people-team-16-regular" ref={icon3} />
					</div>
				</li>
				<li ref={icon_div4}>
					<p ref={item4}>Articles</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="ic:outline-article" ref={icon4} />
					</div>
				</li>
				<li ref={icon_div5}>
					<p ref={item5}>Artwork</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="fluent:people-team-16-regular" ref={icon5} />
					</div>
				</li>
				<li ref={icon_div6}>
					<p ref={item6}>Blogs</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="bxs:pencil" ref={icon6} />
					</div>
				</li>
				<li ref={icon_div7}>
					<p ref={item7}>Link</p>
					<div className={Styles.item_icon}>
						{/* <Icon icon="carbon:add"  /> */}
						<Icon icon="fluent:people-team-16-regular" ref={icon7} />
					</div>
				</li>
			</ul>
			<Button className={Styles.add_btn} onClick={toggle} ref={btn}>
				<Icon icon="carbon:add" color="#0063ff" />
			</Button>
		</div>
	);
}

export default Add_post;
