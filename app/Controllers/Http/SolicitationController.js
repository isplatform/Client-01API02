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

        // let intentName = request.body.queryResult.intent.displayName;

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
            item.massas = request.queryResult.outputContexts.parameters['massas']
            item.recheio = request.queryResult.outputContexts.parameters['recheio']
            item.kitGrande = request.queryResult.outputContexts.parameters['kitGrande']
            item.nomeCliente = request.queryResult.outputContexts.parameters['nomeCliente']
            item.cep = request.queryResult.outputContexts.parameters['cep']
            item.quantidade = request.queryResult.outputContexts.parameters['recheio']
            item.data = request.queryResult.outputContexts.parameters['data']
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
