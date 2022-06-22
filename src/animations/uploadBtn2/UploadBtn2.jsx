import React, { useState } from "react";
import Styles from "./UploadBtn2.module.scss";

function UploadBtn2() {
	const [success, setSuccess] = useState(false);
	const [stage, setStage] = useState(1);

	function trigger() {
		setStage(2);
		setTimeout(() => {
			setStage(3);
		}, 4000);
	}

	return (
		<div
			onClick={trigger}
			className={`${Styles.uploadBtn2_container} ${
				stage === 2 && Styles.stage2
			} ${stage === 3 && Styles.stage3}`}
		>
			<div className={Styles.uploadBtn2}>
				<div className={Styles.progress_bar} />
				<div className={Styles.btn_txt}>
					<h2 className={Styles.upload_txt}>Upload</h2>
					<h2 className={Styles.uploading_txt}>Uploading</h2>
					<h2 className={Styles.uploaded_txt}>{success?"Continue":"Try Again!"}</h2>
				</div>
			</div>
			<div className={Styles.msg} style={{backgroundColor:success?"#c8ffc8":"#ff9797"}}>
				<div className={Styles.msg_text} >
					{success ? (
						<p className={Styles.success}>File uploaded successfully!</p>
					) : (
						<p className={Styles.err}>Something went wrong!</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default UploadBtn2;
