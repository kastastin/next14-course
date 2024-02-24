"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
	const imageInput = useRef();
	const [pickedImage, setPickedImage] = useState(null);

	function handlePickImage() {
		imageInput.current.click();
	}

	function handleChangeImage(e) {
		const file = e.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	}

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>

			<div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} alt="Selected image" fill />}
				</div>

				<input
					id={name}
					name={name}
					type="file"
					accept="image/png, image/jpeg"
					ref={imageInput}
					onChange={handleChangeImage}
					className={classes.input}
					required
				/>

				<button
					type="button"
					onClick={handlePickImage}
					className={classes.button}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
}
