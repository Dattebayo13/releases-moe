migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5bba43cis9ctxr2");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5bba43cis9ctxr2",
    "created": "2022-12-23 22:49:29.377Z",
    "updated": "2023-07-17 12:22:11.877Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p4ahsysc",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "udhmrtrn",
        "name": "body",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "itmmirru",
        "name": "slug",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": "[0-9a-z-]+"
        }
      },
      {
        "system": false,
        "id": "h6hquidm",
        "name": "files",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [
            "600x0"
          ],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "sa3zktz1",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX \"idx_unique_itmmirru\" on \"posts\" (\"slug\")"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != null",
    "updateRule": "user = @request.auth.id",
    "deleteRule": "user = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
