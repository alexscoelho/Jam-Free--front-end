const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://3000-ae3ee2e2-ba12-4f0a-a811-2e83d0aa2bc5.ws-us02.gitpod.io";
	const apiHost = "https://developer.setmore.com/";
	const apiCreateEvent = "api/v1/bookingapi/appointment/create";
	const apiToken = "";

	return {
		// loggedIn: false,
		store: {
			user: {
				loggedIn: false,
				userType: null,
				username: null,
				token: "",
				userId: ""
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
			profile: {},

			files: [],

			appointments: [],

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
				// store.loggedIn = false;
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
					.then(async data => {
						// if (data.status_code !== 200) throw data;
						//data is the token
						// already with data and insert it in token property
						let store = getStore();
						// store.loggedIn = true;
						store.user = {
							userId: data.userId,
							loggedIn: true,
							token: data.jwt
						};

						let login = await setStore(store);
						await getActions().getProfile();
						// success alert
						getActions().setMessage({
							visible: true,
							type: "success",
							heading: "Success",
							errorMessage: `Welcome ${getStore().profile.username}!`
						});
						localStorage.setItem("jammfree-userData", JSON.stringify(store.user));
						history.push("/main");
					})
					.catch(err => {
						getActions().setMessage({
							visible: true,
							type: "danger",
							heading: "Oops!",
							errorMessage: "Something went wrong, check email and password"
						});
						console.error(err);
						return err;
					});
			},

			// verify Token, calling this in useEffect
			checkToken: () => {
				let tokenCheck = JSON.parse(localStorage.getItem("jammfree-userData"));

				if (tokenCheck !== null) {
					// set current user data to store
					setStore({ user: tokenCheck });
					// setStore({ loggedIn: true });

					getActions().getProfile();
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
				}
			},
			// edit profile
			modifyUser: target_user => {
				return fetch(`${baseUrl}/user/${getStore().user.userId}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${getStore().user.token}`
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
			//get user profile
			getProfile: () => {
				return fetch(`${baseUrl}/user/${getStore().user.userId}`, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${getStore().user.token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						store.profile = data[0];
						setStore(store);
					})
					.catch(err => {
						return err;
					});
			},

			// Publish file
			publishFile: file => {
				return fetch(`${baseUrl}/file`, {
					method: "POST",
					headers: {
						"content-type": "application/json"
					},
					body: JSON.stringify(file)
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

			//Get Files
			getFiles: () => {
				return fetch(`${baseUrl}/files`, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${getStore().user.token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						store.files = data[0];
						setStore(store);
					})
					.catch(err => {
						return err;
					});
			},

			// Delete a file
			deleteFile: fileId => {
				return fetch(`${baseUrl}/file/${fileId}`, {
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${getStore().user.token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						return data;
					})
					.catch(err => {
						return err;
					});
			},

			// Modify a file

			modifyFile: (fileId, targetFile) => {
				return fetch(`${baseUrl}/file/${fileId}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${getStore().user.token}`
					},
					body: JSON.stringify(targetFile)
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						return data;
					})
					.catch(err => {
						return err;
					});
			},

			// Create appointment

			createAppointment: () => {
				return fetch(`${apiHost}${apiCreateEvent}`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${apiToken}`
					},
					body: JSON.stringify()
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						return data;
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
