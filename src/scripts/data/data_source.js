class DataSource {
  static getData() {
      return fetch(`./DATA.json`)
      .then(response => response.json())
      .then(responseJSON => {
          if (responseJSON.restaurants) {
              return Promise.resolve(responseJSON.restaurants);
          } else {
              return Promise.reject(`Data is not found`)
          }
      })
  }
}

export default DataSource;