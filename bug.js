```javascript
// Incorrect usage of $inc operator
db.collection.updateOne({"_id":ObjectId("650000000000000000000001")},{$inc:{counter: '1'}});
```