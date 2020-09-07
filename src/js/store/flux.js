const getState = ({ getStore, getActions, setStore }) => {
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
					availability: [
						"2020-09-05 15:27",
						"2020-09-06 9:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27"
					],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Jose",
					instrument: "Drums",
					level: "intermediate",
					availability: [
						"2020-09-05 15:27",
						"2020-09-06 9:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27"
					],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Alex",
					instrument: "Piano",
					level: "intermediate",
					availability: [
						"2020-09-05 15:27",
						"2020-09-06 9:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27"
					],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Pedro",
					instrument: "Maracas",
					level: "intermediate",
					availability: [
						"2020-09-05 15:27",
						"2020-09-06 9:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27"
					],
					email: "eljohn@email.com",
					language: "english"
				},
				{
					name: "Farruco",
					instrument: "Pandereta",
					level: "intermediate",
					availability: [
						"2020-09-05 15:27",
						"2020-09-06 9:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27",
						"2020-09-07 11:27"
					],
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
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			setLogin: value => {
				let store = getStore();
				store.user.loggedIn = value;
				setStore(store);
			},
			loadSomeContacts: () => {
				const baseUrl = "/apis/fake/contact/agenda/";
				fetch(`${baseUrl}`)
					.then()
					.then(data => setStore({ foo: data.bar }));
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
