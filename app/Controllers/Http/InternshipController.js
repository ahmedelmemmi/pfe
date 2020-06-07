'use strict'
const Internship = use('App/Models/Internship');
const FavoriteInternship= use('App/Models/FavoriteInternship')
const Database = use('Database')
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
        return response.send({message: 'Internship has been created'})
    }
    async show({params,response}){
        const internship= await Internship.find(params.id)
        const res= {
            internship_title: internship.internship_title,
            internship_field:internship.internship_field,
            internship_description:internship.internship_description,
            internship_duration:internship.internship_duration,
            internship_level:internship.internship_level,
            internship_begin_date:internship.internship_begin_date,
            internship_end_date:internship.internship_end_date
        }
        return response.json(res);
    }
    async get_all_internships({response}){
         const res = await Database.table('internships').select('*');
         return response.json(res);
    }
    async fetch_internship({params,response}){
        const res = await Database.table('internships').select('*').where('id', params.id);
        

    }
}

module.exports = InternshipController
