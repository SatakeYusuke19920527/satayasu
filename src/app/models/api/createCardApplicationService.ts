import { TrelloapiRepository } from './trelloaipRepository'
import { sendNameProps } from '@/app/types/types'

export const createCard = async({sendCardName, sendDescName}: sendNameProps) =>{
    try{
        const repo = new TrelloapiRepository();
        await repo.trelloSender({sendCardName, sendDescName})
    }catch (err){
        return err
    }
}