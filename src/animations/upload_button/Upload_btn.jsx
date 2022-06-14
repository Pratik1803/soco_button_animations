import React, { useState } from "react";
import Styles from "./buttonHover.module.scss";
import { Icon } from "@iconify/react";

function UploadButton() {
	const [trigger, setTrigger] = useState("stage1");

	function clicked() {
		setTrigger("stage2");
		setTimeout(() => {
			setTrigger("stage3");
		}, 3000);
	}

	return (
		<div className={Styles.uploadBtn}>
			<div
				className={Styles.btn}
				onClick={() => {
					clicked();
				}}
			>
				<div className={Styles.svg_container}>
					{trigger === "stage1" && (
						<Icon
							icon="ant-design:upload-outlined"
							className={`${Styles.stage1svg} ${
								trigger === "stage2" ? Styles.svg1disable : ""
							}`}
							color="#0063ff"
						/>
					)}
					{trigger === "stage2" && (
						<>
							<Icon className={Styles.cloud1} icon="ant-design:cloud-filled" />
							<Icon className={Styles.cloud2} icon="ant-design:cloud-filled" />
							<Icon icon="akar-icons:arrow-up" color="#0063ff" />
						</>
					)}
					{trigger === "stage3" && (
						<Icon
							icon="ci:download-done"
							className={`${Styles.stage3svg} ${
								trigger === "stage3" ? Styles.svg1appear : ""
							}`}
							color="green"
						/>
					)}
				</div>
				{/* <Icon className={Styles.cloud3} icon="ant-design:cloud-filled" color="#0063ff" /> */}
				<div className={Styles.text}>
					{trigger === "stage1" && <p> Upload</p>}
					{trigger === "stage2" && <p> Uploading</p>}
					{trigger === "stage3" && <p> Uploaded</p>}
				</div>
			</div>
		</div>
	);
}

export default UploadButton;
