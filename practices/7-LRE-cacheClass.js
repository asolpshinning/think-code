class MyCache {
    constructor (capacity){
      this.capacity = capacity;
      this.cache = new Map();
    }
  
    get(key){
      if(this.cache.has(key)) {
        let value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
      }
      else return -1
    }
  
    put(key, value){
      if(this.cache.has(key)){
        this.cache.delete(key);
      }
      if(this.capacity === this.cache.size){
        if(!this.cache.has(key)){
          this.cache.delete(this.cache.keys().next().value)
        }
      }
      this.cache.set(key,value)
    }
  
    
  }
  
  let myC = new MyCache(2);
  myC.put(1,1);
  console.log(`after putting 1,1: `, myC.cache)
  myC.put(2,2);
  console.log(`after putting 2,2: `, myC.cache)
  myC.get(1);
  console.log(`after getting 1: `, myC.cache);
  myC.put(3,3);
  console.log(`after putting 3,3: `, myC.cache);
  myC.get(2);
  console.log(`after getting 2: `, myC.cache);
  myC.put(4,4);
  console.log(`after putting 4,4: `, myC.cache);
  