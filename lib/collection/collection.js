Drones = new Mongo.Collection('drones');
Missions = new Mongo.Collection('missions');
Logbook = new Mongo.Collection('logbook');

Drones.allow({
    insert(userId, doc) {
      // The user must be logged in and the document must be owned by the user.
      return userId && doc.owner === userId;
    },
  
    update(userId, doc, fields, modifier) {
      // Can only change your own documents.
      return doc.owner === userId;
    },
  
    remove(userId, doc) {
      // Can only remove your own documents.
      return doc.owner === userId;
    },
  
    fetch: ['owner']
});

Drones.deny({
    update(userId, doc, fields, modifier) {
    // Can't change owners.
        return _.contains(fields, 'owner');
    },
    remove(userId, doc) {
      // Can't remove locked documents.
        return doc.locked;
    },
    fetch: ['locked'] // No need to fetch `owner`
});

Missions.allow({
  insert(userId, doc) {
    // The user must be logged in and the document must be owned by the user.
    return userId && doc.owner === userId;
  },

  update(userId, doc, fields, modifier) {
    // Can only change your own documents.
    /* (userId && doc.owner === userId); */
    return true
  },

  remove(userId, doc) {
    // Can only remove your own documents.
    return doc.owner === userId;
  },

  fetch: ['owner']
});

Missions.deny({
  update(userId, doc, fields, modifier) {
  // Can't change owners.
      return _.contains(fields, 'owner');
  },
  remove(userId, doc) {
    // Can't remove locked documents.
      return doc.locked;
  },
  fetch: ['locked'] // No need to fetch `owner`
});