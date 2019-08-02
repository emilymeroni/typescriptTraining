class MyMap<T> {
  private map: {[key: string] : T} = {};

  setItem(key: string, item: T){
    this.map[key] = item;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear(){
    this.map = {};
  }

  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("banana", 2);
numberMap.setItem("apple", 3);
console.log(numberMap.getItem("apple"));