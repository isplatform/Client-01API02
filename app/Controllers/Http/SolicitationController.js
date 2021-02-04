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

      let intentName = request.body.queryResult.intent.displayName;

        if (intentName == "venda.salgados") {
            return response.json({

                "fulfillmentMessages": [
                    {
                        "card": {
                            "title": "Bolo Decorado",
                            "subtitle": "card text",
                            "imageUri": "https://firebasestorage.googleapis.com/v0/b/jmcriatividades-gapm.appspot.com/o/JMCriatividades%2FBolos%2Fimg01.jpeg?alt=media&token=778a6a97-9ac7-409c-ae97-036fd9677969"
                        }
                    },
                    {
                        "text": {
                            "text": [
                                "Esse eu mensagem de teste"
                            ]
                        }

                    }
                ]
            })
        }
        else if (intentName == "kit.grande") {

            const item = new SolicitationModel()
            item.massas = request.body.queryResult.outputContexts.parameters['massas']
            item.recheio = request.body.queryResult.outputContexts.parameters['recheio']
            item.kitGrande = request.body.queryResult.outputContexts.parameters['kitGrande']
            item.nomeCliente = request.body.queryResult.outputContexts.parameters['nomeCliente']
            item.cep = request.body.queryResult.outputContexts.parameters['cep']
            item.quantidade = request.body.queryResult.outputContexts.parameters['recheio']
            item.data = request.body.queryResult.outputContexts.parameters['data']
            await item.save()
        }


    }

    // async store({ request, response }) {
    //     const data = request.all()
    //     const Solicitation = await SolicitationModel.create(data)
    //     response.send(Solicitation)
    // }
}

module.exports = SolicitationController
