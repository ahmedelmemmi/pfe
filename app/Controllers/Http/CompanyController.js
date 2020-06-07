'use strict'
const Company= use('App/Models/Company')
const Database = use('Database')
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
        return response.send({message: 'Company has been created'})
    }
    async login({request,response,auth}){
        const {company_email,company_password}=request.only(['company_email','company_password'])
        const token= await auth.attempt(company_email,company_password)
        return response.json(token);
    }
    async show({params,response}){
        const user= await Company.find(params.id)
        const res= {
            company_email: user.company_email,
            company_name:user.company_name,
            company_taxcode:user.company_taxcode,
            company_phone:user.company_phone,
            company_adress:user.company_adress,
            company_field:user.company_field,
            company_city:user.company_city,
            company_photo:user.company_photo
        }
        return response.json(res);
    }
    async delete({ response, session, params }) {
        const app = await Company.find(params.id);
    
        await app.delete();
        return response.send({ message: "Company has been deleted" });
      }
    
      async update({ response, request, session, params }) {
        const app = await Company.find(params.id);
        app.company_email= request.all().company_email,
        app.company_name= request.all().company_name,
        app.company_taxcode=request.all().company_taxcode,
        app.company_phone=request.all().company_phone,
        app.company_adress=request.all().company_adress,
        app.company_field=request.all().company_field,
        app.company_city=request.all().company_city,
        app.company_photo=request.all().company_photo,
        app.company_password=request.all().company_password
    
        await app.save();
    
        return response.send({ message: "Company has been updated" });
      }
    async get_all_companies({params,response}){
        const res = await Database.table('companies').select('*');
        return response.json(res);
    }
}

module.exports = CompanyController
