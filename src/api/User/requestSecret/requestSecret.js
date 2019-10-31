import { prisma } from '../../../../generated/prisma-client';
import {generateSecrete, sendSecretMail} from '../../../utils'

export default {
    Mutation: {
        requestSecret:async(_,args) => {
            const {email} = args;
            const loginSecret = generateSecrete();
            try {
                await sendSecretMail(email,loginSecret);
                await prisma.updateUser( { data: {loginSecret}, where:{email} } );
                return true;
            } catch {
                return false;
            }
        }
    }
};