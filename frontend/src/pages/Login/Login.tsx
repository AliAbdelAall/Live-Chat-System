import { FC } from "react";

const Login: FC = () => {
	return (
		<div>
			<div>
				<h1>
					Login
					<span> Chat App</span>
				</h1>
				<div>
					<div>
						<label>
							<span>Username</span>
						</label>
						<input type="text" placeholder="Enter username" />
					</div>

					<div>
						<label>
							<span>Password</span>
						</label>
						<input type="text" placeholder="Enter password" />
					</div>

					<a href="#">Don't have an account?</a>

					<button>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
