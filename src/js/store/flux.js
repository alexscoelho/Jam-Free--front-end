const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://3000-ae3ee2e2-ba12-4f0a-a811-2e83d0aa2bc5.ws-us02.gitpod.io";
	return {
		store: {
			user: {
				loggedIn: true,
				userType: "student",
				username: "bobG"
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
			contacts: [],
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
			setLogin: value => {
				let store = getStore();
				store.user.loggedIn = value;
				setStore(store);
			},
			// loadSomeContacts: () => {
			// 	const baseUrl = "/apis/fake/contact/agenda/";
			// 	fetch(`${baseUrl}`)
			// 		.then()
			// 		.then(data => setStore({ foo: data.bar }));
			// },
			// check availability
			checkAvailabity: date => {
				let store = getStore();
				store.teacher.availability[0].includes(date);
			},
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
						if (resp.status_code === 400) throw resp;
						return resp;
					})
					.catch(err => {
						return err;
					});
			},
			handleAlert: () => {},
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
