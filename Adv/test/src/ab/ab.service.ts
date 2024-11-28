import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Photo } from './abd.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AbService {
  constructor(@InjectRepository(Photo)
    private abdRepository: Repository<Photo>) {}
    getAb(){
        return 'We dont know'
    }
 private users=[]
 add(data)
 {
   this.users.push(data)
   return {message:"Data Inserted",data}
 }
 getAll()
 {
   return this.users
 }
 spec(name){
   return this.users.find((user)=>user.name==name)||
   {message:"Data not found"}
 }

 dbAdd(data)
 {
  return this.abdRepository.save(data)
 }
 get()
 {
  return this.abdRepository.find()
 }
 getid(id)
 {
  return  this.abdRepository.findOne({where:{id}})
 }
 did(id)
 {
  return  this.abdRepository.delete(id)
 }

 async uid(id,data)
 {
  const n_id=await this.abdRepository.findOne({where:{id}})
  if(!n_id){
    return "not found"
  }
  const s=Object.assign(n_id,data)
  return this.abdRepository.save(s)
 }




}
