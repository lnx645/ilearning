// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user"

export default class HomeController {
  async index(){
    let user = await User.all()
        return {
            user
        }
    }
}