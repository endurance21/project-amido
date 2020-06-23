import uuid from 'uuid'
import crypto from 'crypto'

function addVirtual(Schema,name){

    Schema.virtual(name)
    .set(set)
    .get(get)


    function set(password){
        this.password = password
        this.salt = uuid()
        this.hashedPassword = this.encryptedPassword(password)
    }

    function get(){
        return this._password
    }


    Schema.methods = {
        encryptedPassword(password){
            if(password){
                return crypto.createHmac('sha1',this.salt).update(password).digest('hex')
            }
            else return ''
        }
    }

}

export default addVirtual