'use strict'
const Opportunity= use('App/Models/Opportunity')
class OpportunityController {
    async register({request,response}){
        const {photo,Name,Company,Field,City,Description,Skills,Date} =request.only([
            'photo',
            'Name',
            'Company',
            'Field',
            'City',
            'Description',
            'Skills',
            'Date'
        ])
        await Opportunity.create({
            photo,
            Name,
            Company,
            Field,
            City,
            Description,
            Skills,
            Date
        })
        return response.send({message: 'Opportunity has been created'})
    }
    async show({params,response}){
        const opportunity= await Opportunity.find(params.id)
        const res= {
            photo: opportunity.photo,
            Name:opportunity.Name,
            Company:opportunity.Company,
            Field:opportunity.Field,
            City:opportunity.City,
            Description:opportunity.Description,
            Skills:opportunity.Skills,
            Date: opportunity.Date
        }
        return response.json(res);
    }

}

module.exports = OpportunityController
