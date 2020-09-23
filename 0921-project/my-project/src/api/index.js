import axios from "../utils/http";

export function fetchPhotos(p) {
	// http://localhost:8081/getPhotos
	// /api/getPhotos
	return axios.get("/api/getPhotos", {
		params: {
			p,
		},
	});
}
export function fetchPhoto(id) {
	// http://localhost:8081/getPhotos
	// /api/getPhotos
	return axios.get("/api/getPhoto", {
		params: {
			pId: id,
		},
	});
}

export function uploadPhoto(file, onUploadProgress) {
	const formData = new FormData();
	formData.append("img", file);

	return axios.post("/api/upload", formData, {
		onUploadProgress,
	});
}

// fetch
export function fetchLogin({ username, password }) {
	return axios.post("/api/login", {
		username,
		password,
	});
}
