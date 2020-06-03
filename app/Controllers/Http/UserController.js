'use strict'
const User= use('App/Models/User')
class UserController {
    async register({request,response}){
        const {email,password} =request.only([
            'email',
            'password',
          
        ])
        await User.create({
            email,
            password,
        })
        return response.send({message: 'User has been created'})
    }
}

module.exports = UserController
