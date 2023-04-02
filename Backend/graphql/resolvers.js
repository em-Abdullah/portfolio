const Contact = require('../models/Contact');

module.exports = 
{
    Query:{
        async Contact(_, {ID}){
            return await Contact.findById(ID);
        },
        async getContact(){
            return await Contact.find()
         }
    },
    Mutation:{
        async createContact(_, {contactInput:{name, email, comment}})

        {
            const createdContact = new Contact({
                name: name,
                email: email,
                comment: comment,
                createdAt: new Date().toISOString()
            });
            const con = await createdContact.save(); //mongodb save

            return{
                id:con.id,
                ...con._doc
            }
        },
        async deleteContact(_, {ID}){
          const wasDeleted =  (await Contact.deleteOne({_id:ID})).deletedCount;
          return wasDeleted; //1 if deleted 0 if nothing is deleted
        },
        async editContact(_, {ID, contactInput: {name, email,comment }})
    {
        const wasEdited = (await Contact.updateOne({_id:ID}, {name:name, email:email, comment:comment})).modifiedCount;
        return wasEdited; //1 if edited 0 if nothing is edited

    }
    
    }
}