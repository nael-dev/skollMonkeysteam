
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
import useGlobalReducer from "../hooks/useGlobalReducer";
import {
	LuLogOut,
	LuUser,
	LuUserPlus,
	LuMoon,
	LuSun
} from "react-icons/lu";
import { useState } from "react";


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const navigate = useNavigate();

	const [darkMode, setDarkMode] = useState(false);


	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("is_admin");

		dispatch({ type: "Logout" });

		navigate("/");
	};


	const isLoggedIn = !!store.user || store.is_admin;


	let userDisplayName = "Invitado";

	if (store.is_admin) {
		userDisplayName = "Admin";
	} else if (store.user) {
		userDisplayName = "Área Personal";
	}


	const handleDropdownItemClick = () => {
		const dropdownEl = document.querySelector(".dropdown-menu.show");

		if (dropdownEl) {
			const dropdownInstance =
				window.bootstrap.Dropdown.getInstance(dropdownEl);

			if (dropdownInstance) {
				dropdownInstance.hide();
			}
		}
	};


	return (
		<nav
			className={`navbar navbar-expand-lg navbar-custom sticky-top ${
				darkMode ? "dark-mode" : ""
			}`}
		>

			<div className="container">

				{/* LOGO */}

				<Link
					className="navbar-brand d-flex align-items-center"
					to="/"
				>
					<img
						src={logo}
						alt="Logo"
						className="logo spin-icon"
					/>
				</Link>


				{/* BOTÓN MENÚ MÓVIL */}

				<button
					className="navbar-toggler border-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Abrir menú"
				>
					<span className="navbar-toggler-icon"></span>
				</button>


				{/* MENÚ */}

				<div
					className="collapse navbar-collapse justify-content-between"
					id="navbarSupportedContent"
				>

					<ul className="navbar-nav mb-2 mb-lg-0 gap-lg-4 mx-auto">

						{/* HOME */}

						<li className="nav-item">
							<Link
								className="nav-link nav-link-custom"
								to="/"
							>
								Home
							</Link>
						</li>


						{/* EQUIPO */}

						<li className="nav-item">
							<Link
								className="nav-link nav-link-custom"
								to="/team"
							>
								Equipo
							</Link>
						</li>


						{/* NOTICIAS */}

						<li className="nav-item">
							<Link
								className="nav-link nav-link-custom"
								to="/news"
							>
								Noticias
							</Link>
						</li>


						{/* CARRERAS */}

						<li className="nav-item">
							<Link
								className="nav-link nav-link-custom"
								to="/races"
							>
								Carreras
							</Link>
						</li>


						{/* OBSTÁCULOS */}

						<li className="nav-item">
							<Link
								className="nav-link nav-link-custom"
								to="/obstacles"
							>
								Obstáculos
							</Link>
						</li>


						{/* MENÚ ADMIN */}

						{store.is_admin && (
							<li className="nav-item">
								<Link
									className="nav-link nav-link-custom"
									to="/admin"
								>
									Administración
								</Link>
							</li>
						)}

					</ul>


					{/* PARTE DERECHA */}

					<div className="d-flex align-items-center gap-3 ms-auto pe-3 pe-md-0">


						{/* MODO OSCURO */}

						<button
							onClick={() => setDarkMode(!darkMode)}
							className="btn btn-toggle-mode"
							aria-label="Cambiar modo"
							title={
								darkMode
									? "Modo claro"
									: "Modo oscuro"
							}
						>
							{darkMode
								? <LuSun size={20} />
								: <LuMoon size={20} />
							}
						</button>


						{/* USUARIO */}

						<div className="dropdown">

							<button
								className="btn btn-user dropdown-toggle d-flex align-items-center gap-2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>

								{isLoggedIn
									? <LuUser size={20} />
									: <LuUserPlus size={20} />
								}

								<span className="user-email">
									{userDisplayName}
								</span>

							</button>


							<ul
								className="dropdown-menu dropdown-menu-end dropdown-menu-custom"
								style={{ minWidth: "200px" }}
							>

								{isLoggedIn ? (
									<>

										<li>
											<Link
												className="dropdown-item"
												to="/profile"
												onClick={handleDropdownItemClick}
											>
												Perfil de usuario
											</Link>
										</li>


										<li>
											<hr className="dropdown-divider" />
										</li>


										<li>
											<button
												className="dropdown-item text-danger d-flex align-items-center gap-2"
												onClick={() => {
													handleLogout();
													handleDropdownItemClick();
												}}
											>
												<LuLogOut size={18} />
												Cerrar sesión
											</button>
										</li>

									</>

								) : (

									<>

										<li>
											<Link
												className="dropdown-item"
												to="/login"
												onClick={handleDropdownItemClick}
											>
												Iniciar sesión
											</Link>
										</li>


										<li>
											<hr className="dropdown-divider" />
										</li>


										<li>
											<Link
												className="dropdown-item"
												to="/register"
												onClick={handleDropdownItemClick}
											>
												Registrarme
											</Link>
										</li>

									</>

								)}

							</ul>

						</div>

					</div>

				</div>

			</div>

		</nav>
	);
};