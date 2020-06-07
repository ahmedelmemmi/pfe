'use strict'
const Company= use('App/Models/Company')
class CompanyController {
    async register({request,response}){
        const {company_email,company_password,company_name,company_taxcode,company_phone,company_adress,company_field,company_city,company_photo} =request.only([
            'company_email',
            'company_password',
            'company_name',
            'company_taxcode',
            'company_phone',
            'company_adress',
            'company_field',
            'company_city',
            'company_photo'
        ])
        await Company.create({
            company_email,
            company_password,
            company_name,
            company_taxcode,
            company_phone,
            company_adress,
            company_field,
            company_city,
            company_photo

        })
        return response.send({message: 'User has been created'})
    }
    async login({request,response,auth}){
        const {company_email,company_password}=request.only(['company_email','company_password'])
        const token= await auth.attempt(company_email,company_password)
        return response.json(token);
    }
    // async show({params,response}){
    //     const user= await Company.find(params.id)
    //     const res= {
    //         candidate_email: user.candidate_email,
    //         email: user.email,
    //         birthday: user.birthday,
    //         adress: user.adress,
    //         phone: user.phone
    //     }
    //     return response.json(res);
    // }
    async get_all_companies({params,response}){
        const res = await Database.table('companies').select('*');
        return response.json(res);
    }
}

module.exports = CompanyController
