'use strict'
const Candidate=use('App/Models/Candidate')
const Database = use('Database')
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
        return response.send({message: 'Candidate has been created'})
    }
    async login({request,response,auth}){
        const {candidate_email,candidate_password}=request.only(['candidate_email','candidate_password'])
        const token= await auth.attempt(candidate_email,candidate_password)
        return response.json(token);
    }
    async show({params,response}){
        const user= await Candidate.find(params.id)
        const res= {
            candidate_email: user.candidate_email,
            candidate_name: user.candidate_name,
            candidate_service:user.candidate_service,
            candidate_gender:user.candidate_gender,
            candidate_nb_experience:user.candidate_nb_experience,
            candidate_adress:user.candidate_adress,
            candidate_city:user.candidate_city,
            candidate_phone:user.candidate_phone,
            candidate_photo:user.candidate_photo
        }
        return response.json(res);
    }
    async delete({ response, session, params }) {
        const app = await Candidate.find(params.id);
    
        await app.delete();
        return response.send({ message: "Candidate has been deleted" });
    }
    
    async update({ response, request, session, params }) {
        const app = await Candidate.find(params.id);
        app.candidate_email= request.all().candidate_email,
        app.candidate_name= request.all().candidate_name,
        app.candidate_service=request.all().candidate_service,
        app.candidate_gender=request.all().candidate_gender,
        app.candidate_nb_experience=request.all().candidate_nb_experience,
        app.candidate_adress=request.all().candidate_adress,
        app.candidate_city=request.all().candidate_city,
        app.candidate_phone=request.all().candidate_phone,
        app.candidate_photo=request.all().candidate_photo,
        app.candidate_password=request.all().candidate_password
    
        await app.save();
    
        return response.send({ message: "Candidate has been updated" });
    }
    async getAllCandidates({response}){
        try
        {
            const res = await Database.table('candidates').select('*');
            return response.json(res);
        }
        catch(err){
            console.log(err)
            return err ;
        }
    }
}

module.exports = CandidateController
