import { FC } from "react";

const Login: FC = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 flex flex-col rounded-xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Login
					<span className="text-blue-400"> Chat App</span>
				</h1>
				<div>
					<div>
						<label className="label">
							<span className="text-base label-text">
								Username
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">
								Password
							</span>
						</label>
						<input
							type="text"
							placeholder="Enter password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<a
						href="#"
						className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block"
					>
						Don't have an account?
					</a>

					<button className="btn btn-block mt-2">Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
