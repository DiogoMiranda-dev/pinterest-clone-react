import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID -7lI4MZw_QCT2BhN_amMG9OtHrAyYnUBQYAB-y9HhE0",
	},
});
