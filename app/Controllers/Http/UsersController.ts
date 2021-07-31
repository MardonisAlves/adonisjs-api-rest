import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async create({ request }: HttpContextContract) {
        const user = new User()
        user.username = request.input('username')
        user.email = request.input('email')
        user.password = request.input('password')
        user.avatarurl = request.input('avatar-url')
        await user.save()
    }
    public async listall() {
        return await User.all();

    }
    public async userId({ request }: HttpContextContract) {
        return await User.find(request.params())
    }
    public async update({ request }: HttpContextContract) {
        const user = await User.findOrFail(request.params())
        user.email = request.input('email')
        return user
    }
    public async delete({ request }: HttpContextContract) {
        const user = await User.findOrFail(request.params())
        await user.delete()
    }
    

}
