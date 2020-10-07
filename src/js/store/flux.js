const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://3000-ae3ee2e2-ba12-4f0a-a811-2e83d0aa2bc5.ws-us02.gitpod.io/";

	const apiHost = "https://developer.setmore.com/";
	const apiCreateEvent = "api/v1/bookingapi/appointment/create";
	const apiCreateCustomer = "api/v1/bookingapi/customer/create";
	const apiGetTeachers = "/api/v1/bookingapi/staffs";
	// const apiGetCustomer = "api/v1/bookingapi/customer?email=";
	const apiGetAppointment =
		"api/v1/bookingapi/appointments?startDate=06-10-2020&endDate=15-10-2020&customerDetails=true";
	const refresh_token = process.env.SETMORE_REFRESH_TOKEN;
	// const newToken = process.env.SETMORE_ACCESS_KEY;

	return {
		// loggedIn: false,
		store: {
			setmore: {
				token: null
			},
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
					name: "Troy",
					instrument: "Guitar",
					level: "intermediate",
					availability: [],
					email: "troy@lar.com",
					language: "english",
					staff_key: "r93ed1600991200226"
				},
				{
					name: "Pepe",
					instrument: "Drums",
					level: "intermediate",
					availability: [],
					email: "pepe2@hotmail.com",
					language: "english",
					staff_key: "re4c91601044219801"
				}
				// {
				// 	name: "Alex",
				// 	instrument: "Piano",
				// 	level: "intermediate",
				// 	availability: [],
				// 	email: "eljohn@email.com",
				// 	language: "english"
				// },
				// {
				// 	name: "Pedro",
				// 	instrument: "Maracas",
				// 	level: "intermediate",
				// 	availability: [],
				// 	email: "eljohn@email.com",
				// 	language: "english"
				// },
				// {
				// 	name: "Farruco",
				// 	instrument: "Pandereta",
				// 	level: "intermediate",
				// 	availability: [],
				// 	email: "eljohn@email.com",
				// 	language: "english"
				// }
			],

			student: [
				{
					first_name: "Alex",
					email: "alexs@hotmail.com",
					customer_key: "c3c7dfed24f37b7fbc33189a7544e2bc55c857f46"
				}
			],

			service_key: "s4a63f4ff8ecc12bbbae390ae3b08f6799a544edc",

			profile: {},

			customer: {},

			files: [],

			appointments: [],

			favorites: [],

			staffs: [],

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

			// // check availability
			// checkAvailabity: date => {
			// 	let store = getStore();
			// 	store.teacher.availability[0].includes(date);
			// },

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

			modifyFile: (file, fileId) => {
				return fetch(`${baseUrl}/file/${fileId}`, {
					method: "PUT",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${getStore().user.token}`
					},
					body: JSON.stringify(file)
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

			createAppointment: appointment => {
				return fetch(`${apiHost}${apiCreateEvent}`, {
					method: "POST",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${getStore().setmore.token}`
					},
					body: JSON.stringify(appointment)
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

			// Create customer
			createCustomer: customer => {
				return fetch(`${apiHost}${apiCreateCustomer}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getStore().setmore.token}`
					},
					body: JSON.stringify(customer)
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						// let store = getStore();
						// store.profile = data.customer.key;
						// setStore(store);
						return data;
					})
					.catch(err => {
						return err;
					});
			},

			// Generate Setmore token
			getSetmoreToken: () => {
				// if (getStore().setmore.token == null) {
				return fetch(`${apiHost}api/v1/o/oauth2/token?refreshToken=${refresh_token}`)
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(res => {
						let store = getStore();
						store.setmore.token = res.data.token.access_token;
						setStore(store);
					})
					.catch(err => {
						return err;
					});
				// }
			},

			// Get appointments detail
			getAppointments: () => {
				return fetch(`${apiHost}${apiGetAppointment}`, {
					method: "GET",
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${getStore().setmore.token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(response => {
						let store = getStore();
						store.appointments = response.data.appointments;
						setStore(store);
					})
					.catch(err => {
						return err;
					});
			},

			// Get teachers list
			getTeachers: () => {
				return fetch(`${apiHost}${apiGetTeachers}`, {
					method: "GET",
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${getStore().setmore.token}`
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(response => {
						setStore({ staffs: response.data.staffs });
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
