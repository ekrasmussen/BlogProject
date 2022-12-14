const AdminUserModel = require("../../models/admin-user.js")
const moment = require("moment")
const randomstring = require("randomstring")

module.exports = {
    // createNewAdminUser: function(email, password, callback) {
    //     const newAdminUser = new AdminUserModel({
    //         id: randomstring.generate(20),
    //         email: email,
    //         password: password,
    //         authToken: null,
    //         authTokenExpiresTimestamp: null
    //     })

    //     newAdminUser.save(function(newDocError, newDoc) {
    //         if(newDocError) {
    //             callback({success: false})
    //         } else {
    //             callback({success: true})
    //         }
    //     })
    // }

    loginAdminUser: function(email, password, callback) {
        AdminUserModel.findOne({email: email}).exec(function(error, user) {
            if(error || !user) {
                callback({success: false})
            } else {
                user.comparePassword(password, function(matchError, isMatch) {
                    if(matchError || !isMatch) {
                        callback({success: false})
                    } else {
                        const authTokenString = randomstring.generate(40)
                        const authTokenExpiresTimestamp = moment().unix() + (86400 * 3)

                        user.authToken = authTokenString
                        user.authTokenExpiresTimestamp = authTokenExpiresTimestamp

                        user.save(function(saveError) {
                            if(saveError) {
                                callback({success:false})
                            } else {
                                callback({success: true, userId: user.id, authToken: authTokenString, authTokenExpiresTimestamp: authTokenExpiresTimestamp})
                            }
                        })
                    }
                })
            }
        })
    },

    authenticateAdminUser: function(userId, authToken, callback) {
        AdminUserModel.findOne({id: userId}).exec(function(error, user) {
          if (error || !user || authToken !== user.authToken || moment().unix() > user.authTokenExpiresTimestamp) {
            callback({success: false})
          } else {
            callback({success: true})
          }
        })
    },

    removeAdminUserAuthToken: function(userId, callback) {
        AdminUserModel.findOne({id: userId}).exec(function(error, user) {
          if (error || !user) {
            callback({success: false})
          } else {
            user.authToken = null
            user.authTokenExpiresTimestamp = null
      
            user.save(function(saveError) {
              if (saveError) {
                callback({success: false})
              } else {
                callback({success: true})
              }
            })
          }
        })
      }
}