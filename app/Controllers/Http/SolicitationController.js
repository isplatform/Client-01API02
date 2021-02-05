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
        let intentName = request.body.queryResult.intent.displayName
        if(intentName == "kit.famila"){
            return response.json({ "fulfillmentText": "Primeiro Webhook teste" })
        }


         else if (intentName == "kit.grande") {

            // const item = new SolicitationModel()
            // item.massas = request.body.queryResult.parameters['massas']
            // item.recheio = request.body.queryResult.parameters['recheio']
            // item.nomeItem = request.body.queryResult.parameters['nomeItem']
            // item.nomeCliente = request.body.queryResult.parameters['nomeCliente']
            // item.cep = request.body.queryResult.parameters['cep']
            // item.quantidade = request.body.queryResult.parameters['recheio']
            // item.data = request.body.queryResult.parameters['data']
            // await item.save()




            // const data = request.all()
            // const Solicitation = await SolicitationModel.create(data)

            return response.json({ "fulfillmentText": "Primeiro Webhook Kit grande" })
        }

    }

    // async store({ request, response }) {
    //     const data = request.all()
    //     const Solicitation = await SolicitationModel.create(data)
    //     response.send(Solicitation)
    // }
}

module.exports = SolicitationController
// item.massas = request.body.queryResult.outputContexts.parameters['massas']
// item.recheio = request.body.queryResult.outputContexts.parameters['recheio']
// item.nomeItem = request.body.queryResult.outputContexts.parameters['nomeItem']
// item.nomeCliente = request.body.queryResult.outputContexts.parameters['nomeCliente']
// item.cep = request.body.queryResult.outputContexts.parameters['cep']
// item.quantidade = request.body.queryResult.outputContexts.parameters['recheio']
// item.data = request.body.queryResult.outputContexts.parameters['data']