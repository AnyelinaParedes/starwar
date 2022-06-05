const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// apiUrl: 'https://www.swapi.tech/api',
			apiUrl: 'https://swapi.dev/api',
			characters: {},
			planets: {},
			vehicles: {},
		
			favorites: []
		},
		actions: {
			loadDataFromCharacters: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/people`)
					.then((response) => response.json())
					.then((data) => {
						console.log("DATA CHARACTERS", data)
						setStore({
							characters: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromPlanets: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/planets`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA PLANETS", data)
						setStore({
							planets: data
						})
					})
					.catch(error => console.log("error", error));
			},
			loadDataFromVehicles: () => {
				const { apiUrl } = getStore()

				fetch(`${apiUrl}/vehicles`)
					.then((response) => response.json())
					.then((data) => {
						// console.log("DATA STARSHIPS", data)
						setStore({
							vehicles: data
						})
					})
					.catch(error => console.log("error", error));
			},
			addFavorite: newFavorite => {
                const store = getStore();
                console.log(newFavorite);
                const onlyOne = store.favorites.some(item => item === newFavorite)
                if (onlyOne === true) {
                    return
                } else { 
                setStore( store.favorites.push(newFavorite) )
                }
            },
            removeFavorite: index => {
                const { favorites } = getStore();
                favorites.splice(index,1) 
                setStore(...favorites)
            },
            
			
		}
	};
}

export default getState;