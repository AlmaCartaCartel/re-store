const cover = "https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/1/_/1_16_1.jpg";
// Симулирует сервис по рабоите с сервером
export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Blaviken Butcher",
      author: "Geralt of Rivia",
      price: 32,
      cover
    },
    {
      id: 2,
      title: "Relaise it!",
      author: "Blaviken Butcher",
      price: 43,
      cover
    }
  ];

  getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000);
    })
  };
}
