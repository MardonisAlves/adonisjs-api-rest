import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import User from 'App/Models/User'

export default class PostsController {

  public async create({ request }: HttpContextContract) {
    const post = new Post()
    post.title = request.input('title')
    post.descricao = request.input('descricao')
    post.userId = request.input('userId')
    await post.save()
  }
  public async postlist({request}:HttpContextContract) {
    return await Post.all()
  }
  //lista relacinamento
  public async getUsersPosts() {
    //const user = await User.find(2)
    //return await user.related('posts').query()

    const users = await User.query().has('posts')
    return users
}

}
