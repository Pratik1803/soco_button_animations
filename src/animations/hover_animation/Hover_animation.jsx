import React from "react";
import Styles from "./Hover_animation.module.scss";

function Hover_animation() {
	return (
		<div className={Styles.hover_animation}>
			<div className={Styles.hover_btn}>
				<span className={Styles.sp1}></span>
				<span className={Styles.sp2}></span>
                <span className={Styles.sp3}></span>
				<span className={Styles.sp4}></span>
				<div className={Styles.btn_text}>
					<p>Hover Me!</p>
				</div>
			</div>
		</div>
	);
}

export default Hover_animation;
