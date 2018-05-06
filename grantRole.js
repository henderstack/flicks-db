admin = db.getSiblingDB("admin")

admin.grantRolesToUser( "bryan_henderson", [ "root" , { role: "root", db: "admin" } ] )