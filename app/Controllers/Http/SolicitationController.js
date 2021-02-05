'use strict'


const SolicitationModel = use('App/Models/Solicitation')


class SolicitationController {

    /**
       * Show a list of all usuarios.
       * GET usuarios
       *
       * @param {object} ctx
       * @param {Request} ctx.request
       * @param {Response} ctx.response
       * @param {View} ctx.view
       */
    async store({ request, response, view }) {
        //Comentario

    //   let intentName = request.body.queryResult.intent.displayName;

    //     if (intentName == "venda.salgados") {
    //         return response.json({ "fulfillmentText": "Primeiro Webhook 2" })
    //     }
      
        return response.json({ "fulfillmentText": "Primeiro Webhook teste" })


    }

    // async store({ request, response }) {
    //     const data = request.all()
    //     const Solicitation = await SolicitationModel.create(data)
    //     response.send(Solicitation)
    // }
}

module.exports = SolicitationController
