import { DateTime } from 'luxon'
import { BaseModel, column , Has, HasMany, hasMany} from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'

export default class User extends BaseModel {
  @hasMany(() => Post, {
    foreignKey: 'userId', // defaults to userId
  })
  public posts: HasMany<typeof Post>

  
  @column({ isPrimary: true })
  public id: number

  @column()
  public username:string

  @column()
  public email: string 

  @column({serializeAs:null})
  public password:string

  @column()
  public avatarurl: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
