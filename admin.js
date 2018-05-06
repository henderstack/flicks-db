
admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "bryan_henderson",
    pwd: "bryansPword1975",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

db.getSiblingDB("admin").auth("bryan_henderson", "bryansPword1975" )

db.getSiblingDB("admin").createUser(
  {
    "user" : "flicksDBAdmin",
    "pwd" : "flicksReplicaDBPword1975",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)