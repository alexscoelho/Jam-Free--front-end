const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {
				loggedIn: true,
				userType: "teacher",
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
					instrument: "guitar",
					level: "intermediate"
				},
				{
					name: "jose",
					instrument: "drums",
					level: "intermediate"
				},
				{
					name: "alex",
					instrument: "piano",
					level: "intermediate"
				},
				{
					name: "pedro",
					instrument: "maracas",
					level: "intermediate"
				},
				{
					name: "farruco",
					instrument: "pandereta",
					level: "intermediate"
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
