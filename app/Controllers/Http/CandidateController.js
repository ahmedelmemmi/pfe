'use strict'
const Candidate=use('App/Models/Candidate')
class CandidateController {
    async register({request,response}){
        const {candidate_email,candidate_password,candidate_name,candidate_service,candidate_gender,candidate_nb_experience,candidate_adress,candidate_city,candidate_phone,candidate_photo} =request.only([
            'candidate_email',
            'candidate_password',
            'candidate_name',
            'candidate_service',
            'candidate_gender',
            'candidate_nb_experience',
            'candidate_adress',
            'candidate_city',
            'candidate_phone',
            'candidate_photo'
        ])
        await Candidate.create({
            candidate_email,
            candidate_password,
            candidate_name,
            candidate_service,
            candidate_gender,
            candidate_nb_experience,
            candidate_adress,
            candidate_city,
            candidate_phone,
            candidate_photo

        })
        return response.send({message: 'User has been created'})
    }
    async login({request,response,auth}){
        const {candidate_email,candidate_password}=request.only(['candidate_email','candidate_password'])
        const token= await auth.attempt(candidate_email,candidate_password)
        return response.json(token);
    }
    // async show({params,response}){
    //     const user= await Candidate.find(params.id)
    //     const res= {
    //         candidate_email: user.candidate_email,
    //         email: user.email,
    //         birthday: user.birthday,
    //         adress: user.adress,
    //         phone: user.phone
    //     }
    //     return response.json(res);
    // }
    async get_all_candidates(){
        return await Database.table('candidates').select('*');
    }
}

module.exports = CandidateController
