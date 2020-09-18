const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://3000-ae3ee2e2-ba12-4f0a-a811-2e83d0aa2bc5.ws-us02.gitpod.io/";

	return {
		store: {
			user: {
				loggedIn: false,
				userType: null,
				username: null,
				token: ""
			},
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			teacher: [
				{
					name: "John",
					instrument: "Guitar",
					level: "intermediate",
					availability: [],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Jose",
					instrument: "Drums",
					level: "intermediate",
					availability: [],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Alex",
					instrument: "Piano",
					level: "intermediate",
					availability: [],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Pedro",
					instrument: "Maracas",
					level: "intermediate",
					availability: [],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Farruco",
					instrument: "Pandereta",
					level: "intermediate",
					availability: [],
					email: "eljohn@email.com",
					language: "english"
				}
			],
			profiles: [
				{
					name: "John",
					lastName: "Doe",
					userName: "Jdoe",
					instrument: "Guitar",
					level: "intermediate",
					language: "english",
					timeZone: "EST"
				}
			],
			alertMessages: {
				visible: false,
				type: "",
				heading: "",
				errorMessage: ""
			}
		},
		actions: {
			setMessage: data => {
				let store = getStore();
				store.alertMessages = data;
				setStore(store); //insert data into the alert messages object
			},

			// go back to original value and close the alert
			resetMessage: () => {
				let store = getStore();
				store.alertMessages = {
					visible: false,
					type: "",
					heading: "",
					errorMessage: ""
				};
				setStore(store);
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			// setLogin: value => {
			// 	let store = getStore();
			// 	store.user.loggedIn = value;
			// 	setStore(store);
			// },

			setLogout: () => {
				let store = getStore();
				store.user.loggedIn = false;
				setStore(store);
				localStorage.setItem("jammfree-userData", JSON.stringify(store.user));
			},

			// check availability
			checkAvailabity: date => {
				let store = getStore();
				store.teacher.availability[0].includes(date);
			},

			// sign in
			createUser: user => {
				return fetch(`${baseUrl}/user`, {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(user)
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(resp => {
						if (resp.status_code !== 200) throw resp;
						return resp;
					})
					.catch(err => {
						return err;
					});
			},

			handleAlert: () => {},

			// Login, generate token
			loginUser: (login_user, history) => {
				return fetch(`${baseUrl}/login`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(login_user) // converting in string to be sent to backend
				})
					.then(resp => {
						//first promise, ask for status
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						// if (data.status_code !== 200) throw data;
						//data is the token
						// already with data and insert it in token property
						let store = getStore();
						store.user = {
							loggedIn: true,
							userType: "student",
							username: "bobG",
							token: data
						};
						setStore(store);

						// success alert
						getActions().setMessage({
							visible: true,
							type: "success",
							heading: "Success",
							errorMessage: `Welcome ${store.user.username}`
						});
						localStorage.setItem("jammfree-userData", JSON.stringify(store.user));
						history.push("/main");
					})
					.catch(err => {
						getActions().setMessage({
							visible: true,
							type: "danger",
							heading: "Oops!",
							errorMessage: "Bad Email or Password"
						});
						console.log("err:", err);
						return err;
					});
			},

			// check Token
			checkToken: () => {
				let tokenCheck = JSON.parse(localStorage.getItem("jammfree-userData"));

				if (tokenCheck !== null) {
					// set current user data to store
					setStore({ user: tokenCheck });
				} else {
					let store = getStore();
					store.user = {
						loggedIn: false,
						userType: null,
						username: null,
						token: ""
					};
					setStore(store);
					getActions().setMessage({
						visible: true,
						type: "danger",
						heading: "Sorry",
						errorMessage: "You need to login"
					});
					// history.push("/login");
				}
			},

			// edit profile
			modifyUser: (target_user, userId) => {
				return fetch(`${baseUrl}/user/${userId}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${getStore().user.token.jwt}`
					},
					body: JSON.stringify(target_user)
				})
					.then(async resp => {
						if (resp.status >= 500) {
							throw new Error("there was an error");
						}

						const data = await resp.json();
						if (resp.status >= 400) {
							throw new Error(data.message);
						}
						return data;
					})
					.then(data => {
						return data;
						console.log("Success:", data);
					})
					.catch(err => {
						return err;
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
