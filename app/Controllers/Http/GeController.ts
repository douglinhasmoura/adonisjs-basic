import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GetController {
  public async index(ctx: HttpContextContract) {
    console.log(ctx.request.url());

    console.log(ctx.request.qs());

    console.log(ctx.request.params());

    return ctx.response.ok({});
  }
}
