class HashTable {
    constructor(size) {
      this.tableSize = size;
      this.table = new Array(size);
    }
  
    hashFunction(input) {
      let hash = 0;
      for (let i = 0; i < input.length; i++) {
        hash += input.charCodeAt(i);
      }
      return hash % this.tableSize;
    }
  
    set(key, value) {
      const index = this.hashFunction(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    get(key) {
      const index = this.hashFunction(key);
      if (this.table[index]) {
        const item = this.table[index].find(item => item.key === key);
        if (item) {
          return item.value;
        }
      }
      return undefined;
    }
  }
  
  const hashTable = new HashTable(10);
  
  hashTable.set("name", "John");
  hashTable.set("mena", "Johrn");

  hashTable.set("age", 30);
  hashTable.set("city", "New York");
  
  
  console.log("Hash Table:");
  console.table(hashTable.table);
  
  console.log("\nValue for 'name':", hashTable.get("name"));

  