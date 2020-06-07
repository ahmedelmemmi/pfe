'use strict'
const Internship = use('App/Models/Internship');
class InternshipController {
    async createInternship({request,response}){
        const {internship_title,internship_field,internship_description,internship_type,internship_duration,internship_level,internship_begin_date,internship_end_date} =request.only([
            'internship_title',
            'internship_field',
            'internship_description',
            'internship_type',
            'internship_duration',
            'internship_level',
            'internship_begin_date',
            'internship_end_date'
        ])
        await Internship.create({
            internship_title,
            internship_field,
            internship_description,
            internship_type,
            internship_duration,
            internship_level,
            internship_begin_date,
            internship_end_date
        })
        return response.send({message: 'Opportunity has been created'})
    }
    // async show({params,response}){
    //     const internship= await Internship.find(params.id)
    //     const res= {
    //         photo: internship.photo,
    //         Name:internship.Name,
    //         Company:internship.Company,
    //         Field:internship.Field,
    //         City:internship.City,
    //         Description:internship.Description,
    //         Skills:internship.Skills,
    //         Date: internship.Date
    //     }
    //     return response.json(res);
    // }
     async get_all_internships({params,response}){
         const res = await Database.table('internships').select('*');
         return response.json(res);
     }
}

module.exports = InternshipController
