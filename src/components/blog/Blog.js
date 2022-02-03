import {Outlet} from "react-router-dom";

const Blog = (props) => {
	return (
		<div className="home">
			<div className="container">
				<h1 className="text-center mt-5">Blog page</h1>
				<Outlet />
			</div>
		</div>
	)
}

export default Blog;
